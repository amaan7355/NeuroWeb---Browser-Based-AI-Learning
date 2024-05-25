import React from 'react';
// import './ThankYouPage.css'; // Make sure to create and import the CSS file

const ThankYouPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header h5 bg-success text-white">
              <div className="checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="25" fill="none" />
                  <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              Transaction Completed
            </div>
            <div className="card-body">
              <h5 className="card-title">Thank You!</h5>
              <p className="card-text">
                Your transaction has been successfully completed. Enjoy!
              </p>
              <a href="/" className="btn btn-primary mb-3">Go to Homepage</a>
              <div className="feedback-section">
                <p className="text-muted">We would love to hear your feedback.</p>
                <a href="/feedback" className="btn btn-outline-secondary">Give Feedback</a>
              </div>
            </div>
            <div className="card-footer text-muted">
              We appreciate your business
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
