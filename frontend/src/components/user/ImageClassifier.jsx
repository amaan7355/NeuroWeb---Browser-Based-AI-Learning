import React, { useState } from 'react'

const STATUS = document.getElementById('status');
const VIDEO = document.getElementById('webcam');
const ENABLE_CAM_BUTTON = document.getElementById('enableCam');
const RESET_BUTTON = document.getElementById('reset');
const TRAIN_BUTTON = document.getElementById('train');
const MOBILE_NET_INPUT_WIDTH = 224;
const MOBILE_NET_INPUT_HEIGHT = 224;
const STOP_DATA_GATHER = -1;
const CLASS_NAMES = [];

const ImageClassifier = () => {
  const [trainedModel, setTrainedModel] = useState(null);
  const [imageClasses, setImageClasses] = useState([
    {
      name: 'Untitled Class 1',
      samples: [],
      default: true
    },
    {
      name: 'Untitled Class 2',
      samples: []
    },
  ])
  const addNewClass = () => {
    setImageClasses([...imageClasses, {
      name: 'Untitled Class ' + imageClasses.length,
      samples: []
    }])
  }

  const removeClass = (index) => {
    const temp = imageClasses;
    temp.splice(index, 1);
    setImageClasses([...temp]);
  }

  const renameClass = (index, value) => {
    const temp = imageClasses;
    temp[index].name = value;
    setImageClasses([...temp])
  }

  let dataCollectorButtons = document.querySelectorAll('button.dataCollector');
for (let i = 0; i < dataCollectorButtons.length; i++) {
  dataCollectorButtons[i].addEventListener('mousedown', gatherDataForClass);
  dataCollectorButtons[i].addEventListener('mouseup', gatherDataForClass);
  // Populate the human readable names for classes.
  CLASS_NAMES.push(dataCollectorButtons[i].getAttribute('data-name'));
}


let mobilenet = undefined;
let gatherDataState = STOP_DATA_GATHER;
let videoPlaying = false;
let trainingDataInputs = [];
let trainingDataOutputs = [];
let examplesCount = [];
let predict = false;

/**
 * Loads the MobileNet model and warms it up so ready for use.
 **/
async function loadMobileNetFeatureModel() {
    const URL = 
      'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
    
    mobilenet = await tf.loadGraphModel(URL, {fromTFHub: true});
    STATUS.innerText = 'MobileNet v3 loaded successfully!';
    
    // Warm up the model by passing zeros through it once.
    tf.tidy(function () {
      let answer = mobilenet.predict(tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3]));
      console.log(answer.shape);
    });
  }
  
  // Call the function immediately to start loading.
  loadMobileNetFeatureModel();

  let model = tf.sequential();
model.add(tf.layers.dense({inputShape: [1024], units: 128, activation: 'relu'}));
model.add(tf.layers.dense({units: CLASS_NAMES.length, activation: 'softmax'}));

model.summary();

// Compile the model with the defined optimizer and specify a loss function to use.
model.compile({
  // Adam changes the learning rate over time which is useful.
  optimizer: 'adam',
  // Use the correct loss function. If 2 classes of data, must use binaryCrossentropy.
  // Else categoricalCrossentropy is used if more than 2 classes.
  loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy': 'categoricalCrossentropy', 
  // As this is a classification problem you can record accuracy in the logs too!
  metrics: ['accuracy']  
});

function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }
  
  function enableCam() {
    if (hasGetUserMedia()) {
      // getUsermedia parameters.
      const constraints = {
        video: true,
        width: 640, 
        height: 480 
      };
  
      // Activate the webcam stream.
      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        VIDEO.srcObject = stream;
        VIDEO.addEventListener('loadeddata', function() {
          videoPlaying = true;
          // ENABLE_CAM_BUTTON.classList.add('removed');
        });
      });
    } else {
      console.warn('getUserMedia() is not supported by your browser');
    }
  }

  /**
 * Handle Data Gather for button mouseup/mousedown.
 **/
function gatherDataForClass() {
    let classNumber = parseInt(this.getAttribute('data-1hot'));
    gatherDataState = (gatherDataState === STOP_DATA_GATHER) ? classNumber : STOP_DATA_GATHER;
    dataGatherLoop();
  }

  function dataGatherLoop() {
    if (videoPlaying && gatherDataState !== STOP_DATA_GATHER) {
      let imageFeatures = tf.tidy(function() {
        let videoFrameAsTensor = tf.browser.fromPixels(VIDEO);
        let resizedTensorFrame = tf.image.resizeBilinear(videoFrameAsTensor, [MOBILE_NET_INPUT_HEIGHT, 
            MOBILE_NET_INPUT_WIDTH], true);
        let normalizedTensorFrame = resizedTensorFrame.div(255);
        return mobilenet.predict(normalizedTensorFrame.expandDims()).squeeze();
      });
  
      trainingDataInputs.push(imageFeatures);
      trainingDataOutputs.push(gatherDataState);
      
      // Intialize array index element if currently undefined.
      if (examplesCount[gatherDataState] === undefined) {
        examplesCount[gatherDataState] = 0;
      }
      examplesCount[gatherDataState]++;
  
      STATUS.innerText = '';
      for (let n = 0; n < CLASS_NAMES.length; n++) {
        STATUS.innerText += CLASS_NAMES[n] + ' data count: ' + examplesCount[n] + '. ';
      }
      window.requestAnimationFrame(dataGatherLoop);
    }
  }

  async function trainAndPredict() {
    predict = false;
    tf.util.shuffleCombo(trainingDataInputs, trainingDataOutputs);
    let outputsAsTensor = tf.tensor1d(trainingDataOutputs, 'int32');
    let oneHotOutputs = tf.oneHot(outputsAsTensor, CLASS_NAMES.length);
    let inputsAsTensor = tf.stack(trainingDataInputs);
    
    let results = await model.fit(inputsAsTensor, oneHotOutputs, {shuffle: true, batchSize: 5, epochs: 10, 
        callbacks: {onEpochEnd: logProgress} });
    
    outputsAsTensor.dispose();
    oneHotOutputs.dispose();
    inputsAsTensor.dispose();
    predict = true;
    predictLoop();
  }
  
  function logProgress(epoch, logs) {
    console.log('Data for epoch ' + epoch, logs);
  }

  function predictLoop() {
    if (predict) {
      tf.tidy(function() {
        let videoFrameAsTensor = tf.browser.fromPixels(VIDEO).div(255);
        let resizedTensorFrame = tf.image.resizeBilinear(videoFrameAsTensor,[MOBILE_NET_INPUT_HEIGHT, 
            MOBILE_NET_INPUT_WIDTH], true);
  
        let imageFeatures = mobilenet.predict(resizedTensorFrame.expandDims());
        let prediction = model.predict(imageFeatures).squeeze();
        let highestIndex = prediction.argMax().arraySync();
        let predictionArray = prediction.arraySync();
  
        STATUS.innerText = 'Prediction: ' + CLASS_NAMES[highestIndex] + ' with ' + Math.floor(predictionArray[highestIndex] * 100) + '% confidence';
      });
  
      // window.requestAnimationFrame(predictLoop);
    }
  }

  /**
 * Purge data and start over. Note this does not dispose of the loaded 
 * MobileNet model and MLP head tensors as you will need to reuse 
 * them to train a new model.
 **/
function reset() {
    predict = false;
    examplesCount.length = 0;
    for (let i = 0; i < trainingDataInputs.length; i++) {
      trainingDataInputs[i].dispose();
    }
    trainingDataInputs.length = 0;
    trainingDataOutputs.length = 0;
    STATUS.innerText = 'No data collected';
    
    console.log('Tensors in memory: ' + tf.memory().numTensors);
  }

  const displayClasses = () => {
    return imageClasses.map((classObj, index) => {
      return <div className='card shadow rounded-4 mb-4'>
        <div className='card-body'>
          <div className="d-flex justify-content-between align-items-center">
            <input type="text" value={classObj.name} onChange={e => renameClass(index, e.target.value)} className='form-control w-75 fw-semibold fs-4' style={{ border: "none" }} />  <i className="fa-solid fa-pen me-5"></i>
            {
              !classObj.default &&
              <button className='btn btn-danger' onClick={() => removeClass(index)}>
                <i class="fas fa-trash  "></i>
              </button>
            }
          </div>
          <hr className='w-100' style={{ color: "#A9A9A9" }} />
          <p className=''>Add Image Samples</p>
          <div className='row w-50'>
            <div className='col-md-4'>
              <button className='btn button-data' onClick={enableCam}><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/54-512.png" alt="" className='img-fluid' width={"40rem"} /><p className=''>Webcam</p></button>
            </div>
            <div className='col-md-4'>
              <button className='btn button-data'><img src="https://cdn-icons-png.flaticon.com/512/8199/8199243.png" alt="" className='img-fluid' width={'38rem'} /> <p>Upload</p> </button>
            </div>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div className='background-linear-gradient'>
      <div className='bg-train'>
        <div className='container'>
          <div className='row d-flex align-items-center pt-5 p-2'>
            <div className='col-md-6'>
              {displayClasses()}

              <button className='btn btn-lg btn-light mt-4 w-100 mb-3' onClick={addNewClass}>Add New Class</button>
            </div>
            <div className='col-md-3'>
              <div className='card shadow p-1'>
                <div className='card-body'>
                  <h4>Training</h4>
                  <div>
                    <button className='btn btn-primary rounded-1 w-100' onClick={trainAndPredict}>Train Model</button>
                    <hr style={{ color: "#A9A9A9" }} />
                    <button className='btn btn-light w-100 p-2' style={{ textAlign: "left" }}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <h7>Advanced</h7>
                        </div>
                        <div className='col-md-6'>
                          <i className="fa-solid fa-angle-down pt-2" style={{ display: "flex", justifyContent: "right" }}></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card shadow'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <h5 className='mt-2'>Preview</h5>
                    </div>
                    <div className='col-md-8'>
                      <button className='btn btn-success'>
                        <font className='p-1 me-4'>Export Model</font>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                      </button>
                    </div>
                  </div>
                  <hr style={{ color: "#A9A9A9" }} />
                  <p className='text-muted mt-2 p-1 fw-medium'>You must train a model on the left before you can preview it here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageClassifier;