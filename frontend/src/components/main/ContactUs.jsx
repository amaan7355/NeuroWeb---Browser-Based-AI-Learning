import React, { useState } from 'react';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent successfully');
    };

    return (
        <div className='body-contactus p-4'>
            <div className="container mt-5">
                <div className='card shadow p-3 w-75 m-auto'>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row p-3">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <img src="https://assets-v2.lottiefiles.com/a/3f3c800e-1168-11ee-8c3b-131af4d303a5/RVW0iShHMK.gif" alt="" className='img-fluid' />
                            <h3 className='text-center mt-3'>"We value your feedback! Let us know how we can improve."</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
