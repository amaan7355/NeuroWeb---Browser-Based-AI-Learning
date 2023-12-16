import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Route, Router, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, 'min 5 characters req.').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {

  const navigate = useNavigate();

  const [signupOpen, setSignupOpen] = useState(true);

  const [selFile, setSelFile] = useState('');


  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      // transition={{ duration: 0.5, stiffness: 100, type: 'spring', damping: 4 }}
    >
    <div className='body-signup font py-5'>
      <div className="container col-lg-8">
        <div className="card shadow"  style={{
                    background: "hsla(0, 0%, 100%, 0.77)",
                    backdropFilter: "blur(30px)"
                }}>
          <div className=''>
            <div className='row'>
              <div className='col-md-6 px-5'>
                {/* <form onSubmit={signUpform.handleSubmit} className=''>
                  <h3 className="text-center">Sign up to </h3>
                  <h2 className='text-center fw-bold'>E-Sports Arena</h2><hr />
                  <label className='form-label'>
                  Full Name<span style={{ color: 'red' }}> <sup>*</sup></span>
                  </label>
                  <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
                  <input type="text" name='name' className="form-control  mb-4 " placeholder="Your Name" onChange={signUpform.handleChange} value={signUpform.values.name} />
                  <label className='form-label'>
                  Email <span style={{ color: 'red' }}> <sup>*</sup></span>
                  </label>
                  <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span>
                  <input type="email" name='email' className="form-control mb-4 " placeholder="Your Email"
                    onChange={signUpform.handleChange} value={signUpform.values.email} />
                  <label className='form-label'>
                  Password <span style={{ color: 'red' }}> <sup>*</sup></span>
                  </label>
                  <input type="password" name='password' className="form-control   mb-4" placeholder="Your Password" onChange={signUpform.handleChange} value={signUpform.values.password} />
                  <input type="file" className='my-3' onChange={uploadFile} />
                  <br />
                  <button disabled={signUpform.isSubmitting} className="btn btn-dark w-100 my-4" type='submit'>
                    {
                      signUpform.isSubmitting ? (
                        <>
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                        </>
                      ) : 'Submit'
                    }
                  </button>
                  <p className='text-center signup-tc'><input type="checkbox" className='me-2' /> I accept <span className='text-decoration-underline fw-bold'>terms and conditions</span> & <span className='text-decoration-underline fw-bold'>privacy policy</span></p>
                </form> */}

                {
                  signupOpen ? <SignupForm setSignupOpen={setSignupOpen}/> : <LoginForm setSignupOpen={setSignupOpen}/>
                }
                {/* <a className='btn text-decoration-underline fw-bold' onClick={e => {setSignupOpen(!signupOpen)}} style={{border: "none"}}>toggle</a> */}
              </div>
              {/* <div style={{borderLeft: "1px solid gray", height: "100%", position: "absolute", left: "50%"}}></div> */}
              <div className='col-md-6 p-5 font'>
                <img src="https://miro.medium.com/v2/resize:fit:750/1*ePyrIStlJnYr7xkqwozu8w.gif" className='d-block m-auto w-100' alt="" />
                <h2 className='w-80 text-center font mt-4'>Empowering Users with <span className='text-primary'>AI Model Training</span> Online and Offline</h2><br />
                <div className='align-items-bottom justify-content-bottom'>
                <p className='mt-2 text-center'>Do you have any questions?<span className='text-decoration-underline fw-bold ms-2'>Contact us</span></p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default SignUp;