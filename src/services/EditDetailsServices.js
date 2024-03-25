import React from "react";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/FbServices";

export default function EditUserDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState();
  const [guardian, setGuardian] = useState();
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || id === "") {
      return;
    }
    const docRef = doc(db, "userdetails", id);
    updateDoc(docRef, {
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
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <head>
        <title>User Registration Form</title>
      </head>
      <body>
        <h3>USER REGISTRATION FORM</h3>

        <form onSubmit={handleSubmit}>
          <table align="center" cellPadding="10">
            <tr>
              <td>ID</td>
              <td>
                <input
                  type="text"
                  placeholder="Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
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
              <td colSpan="2" align="center">
                <button type="submit" onClick={handleSubmit}>
                  Update
                </button>
              </td>
            </tr>
          </table>
        </form>

        {/* <button type="submit">Register</button> */}
      </body>
    </div>
  );
}
