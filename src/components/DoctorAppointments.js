import { useEffect, useState } from "react";
import "./UserDetails.css";
 
const DoctorAppointments = ()=>{
    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        fetchAppointments();
    },[])
    const fetchAppointments = async ()=>{
        try{
            const response = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json');
            if(!response.ok){
              throw new Error('Failed')
            }
            const data = await response.json();
            const appointments = [];
     
            for( const key in data){
                console.log(data[key].doctor);
              if (data[key].doctor === localStorage.getItem("name")){
                  appointments.push(data[key]);
              }
            }
            setAppointments(appointments)
           
          }catch(error){
              console.log(error);
          }
    }
    return(
        <div className="c">
            <h3 className="dh3">APPOINTMENTS</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time Slot</th>
                        <th>Patient Email</th>
                        <th>Sent Message</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index)=>(
                        <tr key={index}>
                            <td>{appointment.date.slice(0,15)}</td>
                            <td>{appointment.timeSlot}</td>
                            <td>{appointment.email}</td>
                            <td><button className="btn btn-info" onClick={() => (window.location.href = `/message/${appointment.email}`)}>Validate</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default DoctorAppointments;