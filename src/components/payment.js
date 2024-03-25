import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./payment.css"
const PaymentPage = () => {
    const navigate = useNavigate();
    const date = localStorage.getItem('date')
    const timeSlot = localStorage.getItem('timeSlot')
    const problem = localStorage.getItem('problem')
    const doctor = localStorage.getItem('doctor')
    const email = localStorage.getItem('email')
    console.log(date)
    console.log(timeSlot)
    console.log(problem)
    const handlePaymentComplete = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_b7qwedb', 'template_2in9xwa', e.target, 'JPg-IWqyJplqZVK5h')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                date: date,
                timeSlot: timeSlot,
                problem: problem,
                doctor: doctor
            })
        }
        const res = fetch(
            'https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json',
            options
        )
        if (res) {
            alert("sent")
            localStorage.removeItem('date');
            localStorage.removeItem('timeSlot');
            localStorage.removeItem('problem');
            localStorage.removeItem('doctor')
        }
        else {
            alert("not sent")
        }
        navigate('/appointment')
    };

    return (
        <div>

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

export default PaymentPage;