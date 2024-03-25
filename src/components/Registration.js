import React, { useState } from "react";
// import firebase from "firebase/app";
// import firebase from "../services/FbServices";
import "./Resgistration.css";
import firebase from "firebase/compat/app";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/FbServices";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/FbServices";
import { userDetailsRef } from "../services/firestore.collection";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState();
  const [guardian, setGuardian] = useState();
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(userDetailsRef, {
      name,
      email,
      password,
      age,
      gender,
      bloodGroup,
      mobile,
      address,
      guardian,
    })
      .then(() => {
        console.log("Value stored successfully!");
        navigate("/")
      })
      .catch((error) => {
        console.error("Error storing value:", error);
      });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setBloodGroup("");
    setMobile("");
    setAddress("");
    setAge("");
    setRegistered(false);
  };

  return (
    <div >
      <head>
        <title>User Registration Form</title>
      </head>
      <body>
        <h3>USER REGISTRATION FORM</h3>

        <form className="forml" onSubmit={handleSubmit}>
          <table align="center" cellPadding="10">
            <tr>
              <td>NAME</td>
              <td>
                <input
                  type="name"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>AGE</td>
              <td>
                <input
                  type="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
            </tr>
            {/* <tr>
            <td>GENDER</td>
            <input
              type="gender"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </tr> */}
            <tr>
              <td>GENDER</td>
              <td>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>BLOOD GROUP</td>
              <td>
                <input
                  type="bloodGroup"
                  placeholder="Blood Group"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>MOBILE NUMBER</td>
              <td>
                <input
                  type="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>ADDRESS</td>
              <td>
                <input
                  type="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>EMAIL </td>
              <td>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>GUARDIAN</td>
              <td>
                <input
                  type="guardian"
                  placeholder="Guardian"
                  value={guardian}
                  onChange={(e) => setGuardian(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button style={{ backgroundColor: "grey", textAlign: "center", fontWeight: "bold" }} type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </td>
            </tr>
          
            <tr>
              <td colSpan="2">
                <button style={{ backgroundColor: "grey", textAlign: "center", fontWeight: "bold" }} type="submit" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>

          </table>
        </form>

        {/* <button type="submit">Register</button> */}
      </body>
    </div>
  );
};

export default Registration;
