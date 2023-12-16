import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, 'min 5 characters req.').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignupForm = ({ setSignupOpen }) => {
  const navigate = useNavigate();


  const [selFile, setSelFile] = useState('');

  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.avatar = selFile;
      setSubmitting(true);

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar('SignUp Successfull', {
          anchorOrigin: {
              horizontal: 'right',
              vertical: 'top'
          },
          variant: 'success'
      });
      } else {
        enqueueSnackbar('oops something went wrong', {
          anchorOrigin: {
              horizontal: 'right',
              vertical: 'top'
          },
          variant: 'error'
      });
      }

    },
    validationSchema: SignupSchema,
  });
  const uploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/utils/uploadfile', {
      method: 'POST',
      body: fd
    });
    console.log(res.status);
  }
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
    >
      <form onSubmit={signUpform.handleSubmit} className=''>
        <h3 className="text-center mt-3">Sign up to </h3>
        <h2 className='text-center fw-bold text-primary'>TrainifAI</h2><hr />
        <label className='form-label fw-bold'>
          Full Name<span style={{ color: 'red' }}> <sup>*</sup></span>
        </label>
        <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
        <input type="text" name='name' className="form-control  mb-4 " placeholder="Your Name" onChange={signUpform.handleChange} value={signUpform.values.name} />
        <label className='form-label fw-bold'>
          Email <span style={{ color: 'red' }}> <sup>*</sup></span>
        </label>
        <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span>
        <input type="email" name='email' className="form-control mb-4 " placeholder="Your Email"
          onChange={signUpform.handleChange} value={signUpform.values.email} />
        <label className='form-label fw-bold'>
          Password <span style={{ color: 'red' }}> <sup>*</sup></span>
        </label>
        <input type="password" name='password' className="form-control   mb-4" placeholder="Your Password" onChange={signUpform.handleChange} value={signUpform.values.password} />
        {/* <input type="file" className='my-3' onChange={uploadFile} />
        <br /> */}
        {/* <p className=' signup-tc'><input type="checkbox" className='me-2' /> I accept <span className='text-decoration-underline fw-bold'>terms and conditions</span> & <span className='text-decoration-underline fw-bold'>privacy policy</span></p> */}
        <button disabled={signUpform.isSubmitting} className="btn btn-primary w-100 mt-2 mb-4" type='submit'>
          {
            signUpform.isSubmitting ? (
              <>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
              </>
            ) : 'Submit'
          }
        </button>
        <p className='mt-1 text-center'>
          <font className=''>Already Registered?</font>  <a href="" onClick={(e) => {
            e.preventDefault();
            setSignupOpen(false);
          }}>Signin</a>
        </p>
      </form>
    </motion.div>

  )
}

export default SignupForm