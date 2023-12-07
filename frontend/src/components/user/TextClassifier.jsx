import React, { useState } from 'react'

const TextClassifier = () => {
  const [trainedModel, setTrainedModel] = useState(null);
  const [textClasses, setTextClasses] = useState([
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
    setTextClasses([...textClasses, {
      name: 'Untitled Class ' + textClasses.length,
      samples: []
    }])
  }

  const removeClass = (index) => {
    const temp = textClasses;
    temp.splice(index, 1);
    setTextClasses([...temp]);
  }

  const renameClass = (index, value) => {
    const temp = textClasses;
    temp[index].name = value;
    setTextClasses([...temp])
  }
  const displayClasses = () => {
    return textClasses.map((classObj, index) => {
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
          <p className=''>Add Text Samples</p>
          <div className='row w-50'>
            <div className='col-md-4'>
              <button className='btn button-data'><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/54-512.png" alt="" className='img-fluid' width={"40rem"} /><p className=''>Webcam</p></button>
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
    <div>
      <div className='background-linear-gradient'>
        <div className='container'>
          <div className='row d-flex align-items-center pt-5 p-2'>
            <div className='col-md-6'>
              {displayClasses()}

              <button className='btn btn-light btn-lg my-3 w-100' onClick={addNewClass}>Add New Class</button>
            </div>
            <div className='col-md-3'>
              <div className='card shadow p-1'>
                <div className='card-body'>
                  <h4>Training</h4>
                  <div>
                    <button className='btn btn-primary rounded-1 w-100'>Train Model</button>
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

export default TextClassifier;