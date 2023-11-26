import React, { useState } from 'react'

const AudioClassifier = () => {
  const [trainedModel, setTrainedModel] = useState(null);
  const [audioClasses, setAudioClasses] = useState([
    {
      name: 'Background Noise',
      samples: [],
      default: true
    },
    {
      name: 'Untitled Class 1',
      samples: []
    },
  ])
  let recognizer;

  function predictWord() {
    // Array of words that the recognizer is trained to recognize.
    const words = recognizer.wordLabels();
    recognizer.listen(({ scores }) => {
      // Turn scores into a list of (score,word) pairs.
      scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
      // Find the most probable word.
      scores.sort((s1, s2) => s2.score - s1.score);
      document.querySelector('#console').textContent = scores[0].word;
    }, { probabilityThreshold: 0.75 });
  }

  async function app() {
    console.log('model loading...');
    recognizer = window.speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    console.log('model loaded');
    // buildModel();
    //  predictWord();
  }

  app();

  // One frame is ~23ms of audio.
  const NUM_FRAMES = 3;
  let examples = [];

  // Assuming your button has an id of 'collectButton'
  // let collectButton = document.getElementById('noise');

  // collectButton.addEventListener('mousedown', function() {
  //   // Start collecting when the button is pressed

  // });

  // collectButton.addEventListener('mouseup', function() {
  //   // Stop collecting when the button is released

  // });

  function collect(label) {
    if (recognizer.isListening()) {
      return recognizer.stopListening();
    }
    if (label == null) {
      return;
    }
    recognizer.listen(async ({ spectrogram: { frameSize, data } }) => {
      let vals = normalize(data.subarray(-frameSize * NUM_FRAMES));
      examples.push({ vals, label });
      //  document.querySelector('#console').textContent =
      //      ;

      console.log(`${examples.length} examples collected`);
    }, {
      overlapFactor: 0.999,
      includeSpectrogram: true,
      invokeCallbackOnNoiseAndUnknown: true
    });
  }

  function normalize(x) {
    const mean = -100;
    const std = 10;
    return x.map(x => (x - mean) / std);
  }

  const INPUT_SHAPE = [NUM_FRAMES, 232, 1];
  let model = window.model;

  async function train() {
    toggleButtons(false);
    const ys = tf.oneHot(examples.map(e => e.label), 3);
    const xsShape = [examples.length, ...INPUT_SHAPE];
    const xs = tf.tensor(flatten(examples.map(e => e.vals)), xsShape);
    const model = buildModel();
    await model.fit(xs, ys, {
      batchSize: 16,
      epochs: 10,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          //  document.querySelector('#console').textContent =
          console.log(`Accuracy: ${(logs.acc * 100).toFixed(1)}% Epoch: ${epoch + 1}`);
        }
      }
    });
    tf.dispose([xs, ys]);
    toggleButtons(true);
    setTrainedModel(model);
  }

  function buildModel() {
    const model = tf.sequential();
    model.add(tf.layers.depthwiseConv2d({
      depthMultiplier: 8,
      kernelSize: [NUM_FRAMES, 3],
      activation: 'relu',
      //  inputShape: INPUT_SHAPE
      inputShape: [3, 232, 1]
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: [1, 2], strides: [2, 2] }));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 3, activation: 'softmax' }));
    const optimizer = tf.train.adam(0.01);
    model.compile({
      optimizer,
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    return model;
  }

  function toggleButtons(enable) {
    document.querySelectorAll('button').forEach(b => b.disabled = !enable);
  }

  function flatten(tensors) {
    const size = tensors[0].length;
    const result = new Float32Array(tensors.length * size);
    tensors.forEach((arr, i) => result.set(arr, i * size));
    return result;
  }

  async function moveSlider(labelTensor) {
    const label = (await labelTensor.data())[0];
    // document.getElementById('console').textContent = label;
    console.log(label);
    if (label == 2) {
      return;
    }
    let delta = 0.1;
    const prevValue = +document.getElementById('output').value;
    document.getElementById('output').value =
      prevValue + (label === 0 ? -delta : delta);
  }

  function listen() {

    if (recognizer.isListening()) {
      recognizer.stopListening();
      toggleButtons(true);
      document.getElementById('listen').textContent = 'Listen';
      return;
    }
    toggleButtons(false);
    document.getElementById('listen').textContent = 'Stop';
    document.getElementById('listen').disabled = false;

    recognizer.listen(async ({ spectrogram: { frameSize, data } }) => {
      const vals = normalize(data.subarray(-frameSize * NUM_FRAMES));
      const input = tf.tensor(vals, [1, ...INPUT_SHAPE]);
      const probs = trainedModel.predict(input);
      const predLabel = probs.argMax(1);
      await moveSlider(predLabel);
      tf.dispose([input, probs, predLabel]);
    }, {
      overlapFactor: 0.999,
      includeSpectrogram: true,
      invokeCallbackOnNoiseAndUnknown: true
    });
  }

  // interface functions

  const addNewClass = () => {
    setAudioClasses([...audioClasses, {
      name: 'Untitled Class ' + audioClasses.length,
      samples: []
    }])
  }

  const removeClass = (index) => {
    const temp = audioClasses;
    temp.splice(index, 1);
    setAudioClasses([...temp]);
  }

  const renameClass = (index, value) => {
    const temp = audioClasses;
    temp[index].name = value;
    setAudioClasses([...temp])
  }

  const displayClasses = () => {
    return audioClasses.map((classObj, index) => {
      return <div className='card shadow rounded-4 mb-4'>
        <div className='card-body'>
          <div className="d-flex justify-content-between align-items-center">
            <input type="text" value={classObj.name} onChange={e => renameClass(index, e.target.value)} className='form-control w-75' />
            {
              !classObj.default &&
              <button className='btn btn-danger' onClick={() => removeClass(index)}>
                <i class="fas fa-trash  "></i>
              </button>
            }
          </div>
          <hr className='w-100' />
          <p className=''>Add Audio Samples</p>
          <div className='row'>
            <div className='col-md-2'>
              <button className='btn'><img src="https://img.freepik.com/premium-vector/flat-microphone-illustration_627305-233.jpg" alt="" className='img-fluid' width={"50px"} /><p>Mic</p></button>
            </div>
            <div className='col-md-2'>
              <button className='btn'><img src="https://cdn.icon-icons.com/icons2/567/PNG/512/cloudup_icon-icons.com_54402.png" alt="" className='img-fluid' width={'220px'} /> <p>Upload</p> </button>
            </div>
          </div>
        </div>
      </div>
    })
  }

  return (
    // <div>
    //   <div id="console">
    //     <button id="left" onMouseDown={() => collect(0)} onMouseUp={() => collect(null)}>
    //       Left
    //     </button>
    //     <button id="right" onMouseDown={() => collect(1)} onMouseUp={() => collect(null)}>
    //       Right
    //     </button>
    //     <button id="noise" onMouseDown={() => collect(2)} onMouseUp={() => {
    //       if (recognizer.isListening()) {
    //         recognizer.stopListening();
    //       }
    //     }}>Noise</button>
    //     <br />
    //     <br />
    //     <button id="train" onClick={() => train()}>
    //       Train
    //     </button>
    //     <br />
    //     <br />
    //     <button id="listen" onClick={() => listen()}>
    //       Listen
    //     </button>
    //     <input type="range" id="output" min={0} max={10} step="0.1" />
    //   </div>

    // </div>
    <div style={{ backgroundColor: "#F1EFEF", height: "100%" }}>
      <div className='container'>
        <div className='row d-flex align-items-center pt-5'>
          <div className='col-md-5'>
            {displayClasses()}

            <button className='btn btn-primary mt-4 w-100' onClick={addNewClass}>Add New Class</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioClassifier;