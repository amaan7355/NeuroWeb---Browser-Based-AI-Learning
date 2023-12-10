const multer = require('multer');
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const generatedOTP = {};

const router = express.Router();

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './uploads') },
    filename: (req, file, cb) => { cb(null, file.originalname) }
});

const uploader = multer({ storage: myStorage });

// initialize nodemailer
const mailconfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
};
const transporter = nodemailer.createTransport(mailconfig);

const generateOTP = () => {
    const otp = Math.floor(Math.random() * 1000000);
    console.log(otp);
    return otp;
}


router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.json({ status: 'success' });
});

router.post('/sendotp', (req, res) => {
    const otp = generateOTP();
    generatedOTP[req.body.email] = otp;
    transporter.sendMail({
        from: 'neuroweb334@gmail.com',
        to: req.body.email,
        subject: 'OTP for password reset',
        html: `<p>OTP for password reset is <b>${otp}</b></p>`
    })
        .then((info) => {
            return res.status(201).json(
                {
                    msg: 'OTP sent successfully',
                    info: info.messageId,
                    preview: nodemailer.getTestMessageUrl(info)
                }
            )
        }).catch((err) => {
            console.log(err);
            return res.status(500).json({ msg: 'Something went wrong' });
        });
})

router.get('/verifyotp/:email/:otp', (req, res) => {
    const oldotp = generatedOTP[req.params.email];
    if(oldotp == req.params.otp){
        return res.status(200).json({msg: 'OTP verified'});
    }else{
        return res.status(401).json({msg: 'OTP not verified'});
    }
})

module.exports = router;