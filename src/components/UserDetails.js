import { doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../services/FbServices";
import React, { useEffect, useState } from "react";
import { userDetailsRef } from "../services/firestore.collection";
import { FaTrash } from "react-icons/fa";
import EditUserDetails from "./EditUserDetails";
import "./UserDetails.css";

export default function UserDetails() {
    const [userDetails, setUserDetails] = useState([]);
    const [patientEmails, setPatientEmails] = useState([])
    const name = localStorage.getItem("name")
    
    const fetchTests = async () => {
        try {
            const response = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json');
            if (!response.ok) {
                throw new Error('Failed')
            }
            const data = await response.json();
            const mails = [];

            for (const key in data) {
                console.log(data[key].doctor);
                if (data[key].doctor === name) {
                    mails.push(data[key].email);
                }
            }
            setPatientEmails(mails)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // fetchTests();
        getUsers();
        // console.log("userdetails",userDetails)
        // let data = []
        // for(const key in userDetails) {
        //     if(userDetails[key]['email'] in patientEmails) {
        //         data.push(userDetails[key])
        //     } 
        // }
        // console.log("data", data)
        // setUserDetails(data)
    }, []);
    
    function getUsers() {
        getDocs(userDetailsRef)
            .then((Response) => {
                const users = Response.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setUserDetails(users);
                // console.log(Response);
            })
            .catch((error) => console.log(error.message));
    }

    function onDelete(id) {
        const docRef = doc(db, "userdetails", id);
        deleteDoc(docRef)
            .then(() => console.log("Data deleted"))
            .catch((error) => console.log(error.message));
    }
    
    return (
        
        <div className="f">
            <head>
                <title>Patient Details</title>
            </head>
            <body>
                <h3 >PATIENT DETAILS</h3>
                <table align="center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Blood Group</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Guardian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.data.name}</td>
                                <td>{user.data.email}</td>
                                <td>{user.data.gender}</td>
                                <td>{user.data.bloodGroup}</td>
                                <td>{user.data.mobile}</td>
                                <td>{user.data.address}</td>
                                <td>{user.data.guardian}</td>
                                {/* <td>
                  <button onClick={() => EditUserDetails()}>Update</button>
                  <FaTrash onClick={() => onDelete(user.id)} />
                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </body>
        </div>
        
    );
}
