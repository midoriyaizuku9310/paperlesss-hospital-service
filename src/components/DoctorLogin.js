import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./doctorlogin.css";
const DoctorLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [logindetails, setLogindetails] = useState({})
    const checkLogin = async () => {
        try {
            const response = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/doctorDetails.json');
            if (!response.ok) {
                throw new Error('Failed')
            }
            const data = await response.json();
            let match = false;

            for (const key in data) {
                console.log(data[key]);
                if (data[key].Email === email && data[key].Password === password) {
                    console.log('Login Successful');
                    match = true;
                    localStorage.setItem("name", data[key].Name);
                    localStorage.setItem("email", email)
                    localStorage.setItem("doctor", "yes")
                    // break;
                    navigate('/doctordashboard')
                    window.location.reload()
                }
            }
            if (!match) {
                console.log("Invalid");
                alert("Invalid login credentials")
            }
        } catch (error) {
            console.log(error);
        }
    }
    // .then(response=> response.json())
    // .then(data=>{
    //     const docdet = Object.keys(data).map(key =>{
    //         return{
    //             id: key,
    //             email: data[key].Email,
    //             password: data[key].Password
    //         };
    //     });
    //     setDocdet(doc)
    // })
    // .catch(error => console.log(error));

    return (
        <div className="d">
        <div className="doctorlogin">
            <h2>DOCTOR'S LOGIN</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={checkLogin}>LOGIN</button>
        </div>
        </div>
    )
}

export default DoctorLogin;