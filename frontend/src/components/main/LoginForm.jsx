import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import UseAppContext from '../../Context/AppContext';
import { useSnackbar } from 'notistack';

const LoginForm = ({ setSignupOpen }) => {
    const navigate = useNavigate();
    const { setLoggedIn, setAvatar } = UseAppContext();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: async (values) => {
            console.log(values);

            const res = await fetch('http://localhost:5000/user/authenticate', {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                enqueueSnackbar('Login Successfull', {
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    variant: 'success'
                });
                const data = await res.json();
                console.log(data);
                setAvatar(data.avatar);
                sessionStorage.setItem('user', JSON.stringify(data));
                setLoggedIn(true);
                navigate("/main/home")
            }
            else if (res.status === 401) {
                enqueueSnackbar('Wrong Email or Password', {
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    variant: 'error'
                });
                
            }
            else {
                enqueueSnackbar('Some error occurred', {
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    variant: 'error'
                });
            }
        },
    });
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
        >
            {/* <div className="col-md-3">
                <div className="card shadow">
                    <div className="card-body"> */}
            <form onSubmit={loginForm.handleSubmit}>
                <h3 className="text-center mt-3">Sign in to </h3>
                <h2 className='text-center fw-bold text-primary'>TrainifAI</h2><hr />

                <label>Email</label>
                <input
                    id="email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                    type="email"
                    className="form-control mb-4"
                />
                <label>Password</label>
                <input
                    id="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    type="password"
                    className="form-control mb-4"
                />

                <button type="submit" className="btn btn-dark w-100 my-3">
                    SignIn
                </button>
                <p className='text-center mt-4'>
          <font>Don't have an account yet?</font>  <a href="" onClick={(e) => {
            e.preventDefault();
            setSignupOpen(true);
          }}>SignUp</a>
        </p>
            </form>
        </motion.div>
    )
}

export default LoginForm