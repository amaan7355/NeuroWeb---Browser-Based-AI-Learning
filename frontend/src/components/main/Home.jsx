import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../assets/homeAnimation.json';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div className='Montserrat'>
      <div className=''>
        <div id="preview" className="preview">
          <div style={{ display: "none" }} />
          <div>
            <div
              data-draggable="true"
              className=""
              style={{ position: "relative" }}
              draggable="false"
            >
              {/**/}
              {/**/}
              <section draggable="false" className="pt-3" data-v-271253ee="">
                <section className="mb-10 text-center text-lg-start background-linear-gradient p-3">
                  {" "}
                  {/* <style
                    dangerouslySetInnerHTML={{
                      __html:
                        " @media (min-width: 992px) { .cascading-right { margin-right: -50px; } .rotate-lg-6 { transform: rotate(3deg); } } "
                    }} */}
                  {/* Jumbotron */}{" "}
                  <div className="py-3 container">
                    {" "}
                    <div className="row g-0 align-items-center">
                      {" "}
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        {" "}

                        <div className="card-body py-3 px-md-5 shadow-5">
                          {" "}
                          <h1 className='text-white display-5 fw-bold'>A Multisensory Experience:</h1> <br />{" "}
                          <h2 className="display-6 fw-bold mb-4" style={{ color: "hsl(220, 81%, 86%)" }}>Images, Audio, Text AI Model Training</h2>{" "}
                          <h3 className='text-white mb-4 display-7 fw-bold ls-tight'>"Personalize Your AI: Educate Your System on Images, Sounds, and Texts"</h3>
                          <div className="d-md-flex flex-row">
                            {" "}
                            <a
                              className="btn btn-light btn-lg py-3 px-5 mb-2 mt-4"
                              href="/main/train"
                              role="button"
                              aria-controls="#picker-editor"
                              draggable="false"
                            >
                              Start Free Trial
                            </a>{" "}
                            {/* <a
                              className="btn btn-link  btn-lg py-3 px-5 mb-2 me-2 mt-4 text-white"
                              data-ripple-color="success"
                              href="/main/aboutus"
                              role="button"
                              aria-controls="#picker-editor"
                              draggable="false"
                            >
                              About us
                            </a> */}
                            {/* Submit button */}{" "}
                            {/* <button
                              type="submit"
                              className="btn            btn-danger btn-lg ms-md-2"
                              fdprocessedid="r2obga"
                              aria-controls="#picker-editor"
                            >
                              Subscribe
                            </button>{" "} */}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}

                      <div className="col-lg-6 mb-5 mb-lg-0 px-5">
                        {" "}

                        <Lottie animationData={animationData} />

                        {/* <Lottie animationData={animationData}/> */}

                        {/* <video src='/home_video.mp4' height={"400rem"} width={"550rem"} className='rounded-4 img-fluid' autoPlay muted loop>
                        </video> */}

                      </div>{" "}

                    </div>{" "}
                  </div>{" "}
                  {/* Jumbotron */}{" "}
                </section>
              </section>
              {/**/}
            </div>


            <div
              data-draggable="true"
              className=""
              style={{ position: "relative" }}
              draggable="false"
            >
              {/**/}
              {/**/}
              <section draggable="false" className="container pt-5" data-v-271253ee="">
                <section className="mb-10 text-center">
                  {" "}
                  <div className="row d-flex justify-content-center">
                    {" "}
                    <div className="col-lg-8">
                      {" "}
                      <h2 className="mb-4 display-3 fw-bold ls-tight">
                        {" "}
                        <span>Your Journey Starts Here!</span> <br />{" "}
                        <span className="text-primary"></span>{" "}
                      </h2>{" "}
                      <p className="text-muted lead fs-3">
                        Join us on a journey of exploration and creativity. Whether you're a seasoned AI enthusiast or just starting to dip your toes into the world of machine learning, our MERN project is your canvas. Start your journey to AI empowerment right here, right now.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </section>
              </section>
              {/**/}
            </div>


            <div
              data-draggable="true"
              className=""
              style={{ position: "relative", marginRight: "" }}
              draggable="false"
            >
              {/**/}
              {/**/}
              <section draggable="false" className="container pt-5" data-v-271253ee="">
                <section className="mb-10">
                  {" "}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        " @media (min-width: 992px) { .cascading-right { margin-right: -50px; } .rotate-lg-6 { transform: rotate(6deg); } } "
                    }}
                  />{" "}
                  {/* Jumbotron */}{" "}
                  <div className="container py-4">
                    {" "}
                    <div className="row g-0 align-items-center">
                      {" "}
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        {" "}
                        <img
                          src="/robot.jpg"
                          className="w-75 rounded-4 shadow-4"
                          alt=""
                          aria-controls="#picker-editor"
                          draggable="false"
                        />{" "}
                      </div>{" "}
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        {" "}
                        <div
                          className="card cascading-right background-linear-gradient text-white"
                        style={{
                          marginRight: ""
                        }}
                        >
                          {" "}
                          <div className="card-body py-4 px-md-5 shadow-5">
                            {" "}
                            <h2 className="fw-bold mb-4">Hello!</h2>{" "}
                            <p className="fs-5 mb-4">
                              "Welcome to the gateway of AI empowerment - where innovation meets accessibility, and the future of machine learning unfolds at your fingertips. Say hello to a revolutionary platform that defies limitations: a MERN-based wonderland that empowers users to usher in the age of intelligence. Imagine a realm where uploading data triggers a symphony of possibilities, where image, audio, and text classification models await your command, ready to be sculpted into brilliance within your browser. But wait, there's more - this isn't just an online journey; it's a voyage that transcends connectivity barriers, ensuring your AI aspirations flourish even in offline sanctuaries."
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}

                    </div>{" "}
                  </div>{" "}
                  {/* Jumbotron */}{" "}
                </section>
              </section>
              {/**/}
            </div>

            <div
              data-draggable="true"
              className=""
              style={{ position: "relative" }}
              draggable="false"
            >
              {/**/}
              {/**/}
              <section draggable="false" className="container pt-5" data-v-271253ee="">
                <section className="mb-10 text-center">
                  {" "}
                  <div className="row d-flex justify-content-center">
                    {" "}
                    <div className="col-lg-8">
                      {" "}
                      <h2 className="mb-4 display-3 fw-bold ls-tight">
                        {" "}
                        <span>What is <span style={{ color: "hsl(220, 81%, 60%)" }}>TrainifAI?</span></span> <br />{" "}
                        <span className="text-primary"></span>{" "}
                      </h2>{" "}
                      <p className="text-muted lead fs-3">
                        "TrainifAI is an innovative MERN-based platform revolutionizing AI training. It enables users to upload diverse datasets effortlessly via a website interface and trains image, audio, and text classification models directly within their browser. The platform's standout feature lies in its offline functionality, ensuring uninterrupted model training, even without an internet connection. With TrainifAI, users experience a seamless and accessible way to develop AI models at their convenience."
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </section>
              </section>
              {/**/}
            </div>

            <div className='container my-4'>
              <h2 className="mb-4 display-3 fw-bold ls-tight text-center my-5">
                <span>What Model Training we offer?</span> <br />
                <span className="text-primary"></span>
              </h2>
              <div className="row row-cols-1 row-cols-md-3 g-4 my-4 p-3">
                <div className="col">
                  <div className="card h-100" style={{border: "none"}}>
                    <img
                      src="/image_classifier.gif"
                      className="card-img-top"
                      alt="Skyscrapers"
                      height={"280rem"}
                    />
                    <div className="card-body">
                      <h4 className="card-title fw-bold">Image Classification Model Training</h4>
                      <p className="card-text fs-5">
                        Train a model to classify images by uploading images through your device or webcam.
                      </p>
                    </div>
                    {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{border: "none"}}>
                    <img
                      src="/audio_classifier.gif"
                      className="card-img-top"
                      alt="Los Angeles Skyscrapers"
                      height={"280rem"}
                    />
                    <div className="card-body">
                      <h4 className="card-title fw-bold">Audio Classification Model Training</h4>
                      <p className="card-text fs-5">
                      Train a model to classify audio by uploading audio files or recording audio from your device.
                      </p>
                    </div>
                    {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{border: "none"}}>
                    <img
                      src="/text_classifier.gif"
                      className="card-img-top"
                      alt="Palm Springs Road"
                      height={"280rem"}
                    />
                    <div className="card-body">
                      <h4 className="card-title fw-bold">Text Classification Model Training</h4>
                      <p className="card-text fs-5">
                      Train a model to classify text by uploading text files.
                      </p>
                    </div>
                    {/* <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>


            <div className='container my-4'>
              <h2 className="mb-4 display-3 fw-bold ls-tight text-center my-5">
                <span>Steps to Train a Classification Model!</span> <br />
                <span className="text-primary"></span>
              </h2>
              <div>
                <img src="https://assets-global.website-files.com/614c82ed388d53640613982e/6475ee7f074119ae0c60c4bb_image%20classification%20data%20labeling.webp" alt="" className='img-fluid mt-4' />
              </div>
            </div>


            


            <div
              data-draggable="true"
              className=""
              style={{ position: "relative" }}
              draggable="false"
            >
              {/**/}
              {/**/}
              <section draggable="false" className="container pt-5" data-v-271253ee="">
                <section className="mb-5 background-linear-gradient p-2">
                  {" "}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        " #pricing-block-5 { height: 300px; padding-top: 55px; } @media (min-width: 992px) { #pricing-block-5 { height: 400px; padding-top: 80px; } } } @media (min-width: 992px) { .rounded-lg-top-end { border-top-right-radius: 0; } .rounded-lg-bottom-end { border-bottom-right-radius: 0; } .rounded-lg-top-start { border-top-left-radius: 0; } .rounded-lg-bottom-start { border-bottom-left-radius: 0; } } "
                    }}
                  />{" "}
                  <div
                    id="pricing-block-5"
                    className="background-radial-gradient text-center text-white"
                  >
                    {" "}
                    <h2 className="fw-bold">Pricing</h2>{" "}
                  </div>{" "}
                  <div className="row mx-4 mx-md-5" style={{ marginTop: "-200px" }}>
                    {" "}
                    <div className="col-lg-4 col-md-12 p-0 py-5">
                      {" "}
                      <div className="card h-100 rounded-lg-top-end rounded-lg-bottom-end">
                        {" "}
                        <div className="card-header text-center pt-4">
                          {" "}
                          <p className="text-uppercase">
                            {" "}
                            <strong>Basic</strong>{" "}
                          </p>{" "}
                          <h3 className="mb-4">
                            {" "}
                            <strong>$ 129</strong>{" "}
                            <small className="text-muted" style={{ fontSize: 16 }}>
                              /year
                            </small>{" "}
                          </h3>{" "}
                          <button
                            type="button"
                            className="btn btn-link w-100 mb-3"
                            style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                            data-ripple-color="primary"
                            fdprocessedid="bofhpj"
                          >
                            Buy
                          </button>{" "}
                        </div>{" "}
                        <div className="card-body">
                          {" "}
                          <ol className="list-unstyled mb-0">
                            {" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Unlimited updates</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Git repository</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>npm installation</span>{" "}
                            </li>{" "}
                          </ol>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-4 p-0">
                      {" "}
                      <div className="card h-100 shadow-5" style={{ zIndex: 1 }}>
                        {" "}
                        <div className="card-header text-center pt-4">
                          {" "}
                          <p className="text-uppercase">
                            {" "}
                            <strong>Enterprise</strong>{" "}
                          </p>{" "}
                          <h3 className="mb-4">
                            {" "}
                            <strong>$ 499</strong>{" "}
                            <small className="text-muted" style={{ fontSize: 16 }}>
                              /year
                            </small>{" "}
                          </h3>{" "}
                          <button
                            type="button"
                            className="btn btn-primary w-100 mb-3"
                            fdprocessedid="ibc1nyv"
                          >
                            Buy
                          </button>{" "}
                        </div>{" "}
                        <div className="card-body">
                          {" "}
                          <ol className="list-unstyled mb-0">
                            {" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Unlimited updates</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Git repository</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>npm installation</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Code examples</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Premium snippets</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Premium support</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Drag&amp;Drop builder</span>{" "}
                            </li>{" "}
                          </ol>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-4 p-0 py-5">
                      {" "}
                      <div className="card h-100 rounded-lg-top-start rounded-lg-bottom-start">
                        {" "}
                        <div className="card-header text-center pt-4">
                          {" "}
                          <p className="text-uppercase">
                            {" "}
                            <strong>Advanced</strong>{" "}
                          </p>{" "}
                          <h3 className="mb-4">
                            {" "}
                            <strong>$ 299</strong>{" "}
                            <small className="text-muted" style={{ fontSize: 16 }}>
                              /year
                            </small>{" "}
                          </h3>{" "}
                          <button
                            type="button"
                            className="btn btn-link w-100 mb-3"
                            style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                            data-ripple-color="primary"
                            fdprocessedid="yu269"
                          >
                            Buy
                          </button>{" "}
                        </div>{" "}
                        <div className="card-body">
                          {" "}
                          <ol className="list-unstyled mb-0">
                            {" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Unlimited updates</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Git repository</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>npm installation</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Code examples</span>{" "}
                            </li>{" "}
                            <li className="mb-3">
                              {" "}
                              <i className="fas fa-check text-success me-3" />
                              <span>Premium snippets</span>{" "}
                            </li>{" "}
                          </ol>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </section>
              </section>
              {/**/}
            </div>

          </div>
        </div>

        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="mb-4">Testimonials</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                amet numquam iure provident voluptate esse quasi, veritatis totam
                voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">Maria Smantha</h5>
              <h6 className="text-primary mb-3">Web Developer</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning" />
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">Lisa Cudrow</h5>
              <h6 className="text-primary mb-3">Graphic Designer</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">John Smith</h5>
              <h6 className="text-primary mb-3">Marketing Specialist</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning" />
                </li>
                <li>
                  <i className="far fa-star fa-sm text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center">
              {" "}
              <style
                dangerouslySetInnerHTML={{
                  __html: " .grayscale { filter: grayscale(100%); } "
                }}
              />{" "}
              <h2 className="fw-bold mb-5">
                {" "}
                <span>Trusted by</span>
                <u className="mx-2">2,000,000+</u>
                <span>users</span>{" "}
              </h2>{" "}
              <div className="row mb-4">
                {" "}
                <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/2.png"
                    className="img-fluid grayscale px-4 px-md-5"
                    alt=""
                    aria-controls="#picker-editor"
                    draggable="false"
                  />{" "}
                </div>{" "}
                <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/1.png"
                    className="img-fluid grayscale px-4 px-md-5"
                    alt=""
                    aria-controls="#picker-editor"
                    draggable="false"
                  />{" "}
                </div>{" "}
                <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/3.png"
                    className="img-fluid grayscale px-4 px-md-5"
                    alt=""
                    aria-controls="#picker-editor"
                    draggable="false"
                  />{" "}
                </div>{" "}
                <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
                    className="img-fluid grayscale px-4 px-md-5"
                    alt=""
                    aria-controls="#picker-editor"
                    draggable="false"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </section>
          </section>
          {/**/}
        </div>

        <div
          data-draggable="true"
          className="mb-5"
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center">
              {" "}
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    " hr.divider-vertical { position: absolute; right: 0; top: 0; width: 1px; background-image: linear-gradient( 180deg, transparent, hsl(0, 0%, 40%), transparent ); background-color: transparent; height: 100%; } "
                }}
              />{" "}
              <div className="row">
                {" "}
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  {" "}
                  <i
                    className="fas fa-cubes fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  />{" "}
                  <h5 className="text-primary fw-bold mb-3">5000+</h5>{" "}
                  <h6 className="fw-normal mb-0">Components</h6>{" "}
                  <hr className="divider-vertical d-none d-md-block" />{" "}
                </div>{" "}
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  {" "}
                  <i
                    className="fas fa-layer-group fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  />{" "}
                  <h5 className="text-primary fw-bold mb-3">490+</h5>{" "}
                  <h6 className="fw-normal mb-0">Design blocks</h6>{" "}
                  <hr className="divider-vertical d-none d-lg-block" />{" "}
                </div>{" "}
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  {" "}
                  <i
                    className="fas fa-image fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  />{" "}
                  <h5 className="text-primary fw-bold mb-3">100+</h5>{" "}
                  <h6 className="fw-normal mb-0">Templates</h6>{" "}
                  <hr className="divider-vertical d-none d-md-block" />{" "}
                </div>{" "}
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative">
                  {" "}
                  <i
                    className="fas fa-plug fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  />{" "}
                  <h5 className="text-primary fw-bold mb-3">28</h5>{" "}
                  <h6 className="fw-normal mb-0">Plugins</h6>{" "}
                </div>{" "}
              </div>{" "}
            </section>
          </section>
          {/**/}
        </div>


        {/* Footer */}
        <footer className="text-center text-lg-start background-linear-gradient text-white">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Trainifai
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-white fw-bold ms-3" href="">
              TrainifAI
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}

      </div>
    </div>
  )
}

export default Home