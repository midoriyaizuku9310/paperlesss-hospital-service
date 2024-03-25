import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";
import { userDetailsRef } from "../services/firestore.collection";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../services/FbServices";

const EditDoctorDetails = () => {
  const abc = useParams();
  const [user, setUser] = useState([]);
  console.log(abc);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userRef = doc(db, "userdetails", abc.userId);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists) {
          const userData = snapshot.data();
          setUser(userData);
          console.log(user);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [abc.userId]);

  const handleUpdate = async () => {
    try {
      // const firestore = firebase.firestore();
      const userRef = doc(db, "userdetails", abc.userId);
      console.log(userRef);
      await updateDoc(userRef, user);
      console.log("User details updated successfully");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <>
        <title>User Update Form</title>
      </>
      <>
        <h3>USER UPDATE FORM</h3>

        <table align="center" cellPadding="10">
          <tr>
            <td>NAME</td>
            <td>
              <input
                type="text"
                placeholder="Username"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>AGE</td>
            <td>
              <input
                type="number"
                placeholder="Age"
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>GENDER</td>
            <td>
              <select
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
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
                type="text"
                placeholder="Blood Group"
                value={user.bloodGroup}
                onChange={(e) =>
                  setUser({ ...user, bloodGroup: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>MOBILE NUMBER</td>
            <td>
              <input
                type="text"
                placeholder="Mobile"
                value={user.mobile}
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>ADDRESS</td>
            <td>
              <input
                type="text"
                placeholder="Address"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>EMAIL </td>
            <td>
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>PASSWORD</td>
            <td>
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>GUARDIAN</td>
            <td>
              <input
                type="text"
                placeholder="Guardian"
                value={user.guardian}
                onChange={(e) => setUser({ ...user, guardian: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button onClick={handleUpdate}>Update</button>
            </td>
          </tr>
        </table>
      </>
    </div>
  );
};

export default EditDoctorDetails;
