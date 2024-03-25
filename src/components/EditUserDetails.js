import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";
import { userDetailsRef } from "../services/firestore.collection";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../services/FbServices";
import { collection } from "firebase/firestore";
import { UserContext } from "../UserContext";
import "./EditUserDetails.css";


const EditUserDetails = () => {
  const abc = useParams();
  
  const [userDetails, setUserDetails] = useState({});
  const { user } = useContext(UserContext);
 
  useEffect(() => {
    getUsers();
  }, [user]);
 
  function getUsers() {
    const userDetailsCollection = collection(db, "userdetails");
    getDocs(userDetailsCollection)
      .then((Response) => {
        const user = Response.docs
          .filter((doc) => doc.data().email === abc.email)
          .map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))[0];
        setUserDetails(user?.data || {});
      })
      .catch((error) => console.log(error.message));
  }
 
 
  const handleUpdate = async () => {
    try {
      const userSnapshot = await getDocs(collection(db, "userdetails"));
      const userDoc = userSnapshot.docs.find(doc => doc.data().email === abc.email);
      
      if (userDoc) {
        await updateDoc(userDoc.ref, userDetails);
        console.log("User details updated successfully");
      } else {
        console.error("No user found with the provided email");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
 
  return (
    <div className="container">
    <div className="editdetails">
      <div>
        <title>User Update Form</title>
      </div>
      <div className="edit">
        <h3>UPDATE YOUR DETAILS</h3>
        <table align="center" cellPadding="10">
          <tr>
            <td>NAME</td>
            <td>
              <input
                type="text"
                placeholder="Username"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>AGE</td>
            <td>
              <input
                type="text"
                placeholder="Age"
                value={userDetails.age}
                onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>GENDER</td>
            <td>
              <input
                type="text"
                placeholder="Gender"
                value={userDetails.gender}
                onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>BLOOD GROUP</td>
            <td>
              <input
                type="text"
                placeholder="Blood Group"
                value={userDetails.bloodGroup}
                onChange={(e) => setUserDetails({ ...userDetails, bloodGroup: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>MOBILE NUMBER</td>
            <td>
              <input
                type="text"
                placeholder="Mobile Number"
                value={userDetails.mobile}
                onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>ADDRESS</td>
            <td>
              <input
                type="text"
                placeholder="Address"
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>EMAIL </td>
            <td>
              <input
                type="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>PASSWORD</td>
            <td>
              <input
                type="text"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
              />
            </td>
          </tr>
          <tr>
             <td colSpan="2" align="center">
               <button onClick={handleUpdate}>UPDATE</button>
             </td>
           </tr>

        </table>
      </div>
    </div>
    </div>
  );
};
 
export default EditUserDetails;
