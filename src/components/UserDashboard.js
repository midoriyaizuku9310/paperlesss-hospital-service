import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/FbServices";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export default function UserDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, [userDetails, user]);

  function getUsers() {
    const userDetails = collection(db, "userdetails");
    getDocs(userDetails)
      .then((Response) => {
        const users = Response.docs
          .filter((doc) => doc.data().email === user.name)
          .map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }));
        setUserDetails(users);
        // console.log(Response);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      <>
        <title>Patient Details</title>
      </>
      <>
        <h3>PATIENT DETAILS</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Mobile Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => (
              <tr key={user.id}>
                <td>{user.data.name}</td>
                <td>{user.data.email}</td>
                <td>{user.data.gender}</td>
                <td>{user.data.bloodGroup}</td>
                <td>{user.data.mobile}</td>
                <td>{user.data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}
