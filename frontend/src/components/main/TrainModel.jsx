import React from 'react'

const TrainModel = () => {
    return (
        <div className=''>
            <div className='train'>
                <h1 className='fw-bold Montserrat text-center' style={{ fontSize: "3.5rem" }}>Start a Project.</h1>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-4 p-3">
                    <div className="col">
                        <div className="card shadow h-100" style={{ border: "none" }}>
                            <img
                                src="https://assets-global.website-files.com/5fb24a974499e90dae242d98/628215e9025b55f1a0a8419d_Image%20Processing%20Part%201_Classifying.jpg"
                                className="card-img-top"
                                alt="Skyscrapers"
                                height={"280rem"}
                            />
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Image Project</h4>
                                <p className="card-text fs-5">
                                    Train a model to classify images.
                                </p>
                                <a href='/user/image' className='btn btn-primary w-100'>Start Training</a>
                            </div>
                            {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow h-100" style={{ border: "none" }}>
                            <img
                                src="https://blogs.rstudio.com/ai/posts/2019-02-07-audio-background/images/waves2.png"
                                className="card-img-top"
                                alt="Los Angeles Skyscrapers"
                                height={"280rem"}
                            />
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Audio Project</h4>
                                <p className="card-text fs-5">
                                    Train a model to classify audio.
                                </p>
                                <a href='/user/audio' className='btn btn-primary w-100'>Start Training</a>
                            </div>
                            {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow h-100" style={{ border: "none" }}>
                            <img
                                src="https://images.contentstack.io/v3/assets/blt71da4c740e00faaa/blt39bd7d9de4c1b70f/62b4fe184de82610183d7390/text-classification-applications.png"
                                className="card-img-top"
                                alt="Palm Springs Road"
                                height={"280rem"}
                            />
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Text Project</h4>
                                <p className="card-text fs-5">
                                    Train a model to classify text.
                                </p>
                                <a href='/user/text' className='btn btn-primary w-100'>Start Training</a>
                            </div>
                            {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrainModel;