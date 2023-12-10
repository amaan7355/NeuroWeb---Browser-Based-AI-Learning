import { enqueueSnackbar } from 'notistack';
import React, { useRef } from 'react';

const ResetPassword = () => {
    const emailRef = useRef(null);
    const otpRef = useRef(null);

    const sendOTP = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/utils/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        console.log(res.status);

        if (res.status === 201) {
            enqueueSnackbar('OTP sent Successfull', {
                anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top'
                },
                variant: 'success'
            });
        }

        else if (res.status === 400) {
            enqueueSnackbar('Email is not registered', {
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
        };

    }
        const verifyOTP = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/utils/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
            console.log(res.status);
        }
    

    return (
        <div className='container'>
            <h2 className='mt-3'>Reset your Password</h2>
            <label className=''>Enter Registered Email</label>
            <input className='form-control mt-3 w-50' type="text" ref={emailRef} />
            <button className='btn btn-primary mt-4' onClick={sendOTP}>Send OTP</button><br />
            <label className='mt-3' htmlFor="">Enter OTP</label>
            <input className='form-control mt-3 w-25' type="text" ref={otpRef} />
            <button onClick={verifyOTP} className='btn btn-success mt-3'>Verify OTP</button>
        </div>
    )
}

export default ResetPassword;