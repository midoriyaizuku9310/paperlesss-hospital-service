import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./payment.css"
const TestPayment = () => {
    const navigate = useNavigate();
    
    const email = localStorage.getItem('email')
    
    const handlePaymentComplete = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                test: localStorage.getItem("test")
            })
        }
        const res = fetch(
            'https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/TestDetails.json',
            options
        )
        if (res) {
            alert("sent")
        }
        else {
            alert("not sent")
        }
        navigate('/booktest')
    };

    return (
        <div>
            <h2>Payment Page</h2>
            <div className="container p-0">
                <div className="card px-4">
                    <p className="h8 py-3">Payment Details</p>
                    <div className="row gx-3">
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Person Name</p>
                                <input className="form-control mb-3" type="text" placeholder="Name" defaultValue={""} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p>
                                <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p>
                                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p>
                                <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="btn btn-primary mb-3">

                                <span className="ps-3" onClick={handlePaymentComplete}>Complete Payment</span>
                                <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestPayment;