import { useEffect, useState } from "react";
import "./UserDetails.css";

const Inbox = () => {
    const [message, setmessage] = useState([]);
    useEffect(() => {
        fetchmessage();
    }, [])
    const fetchmessage = async () => {
        try {
            const response = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/Message.json');
            if (!response.ok) {
                throw new Error('Failed')
            }
            const data = await response.json();
            const mes = [];
            // console.log(data)
            for (const key in data) {
                // console.log(data[key].doctor);
                console.log(data[key])
                if (data[key].receiver == localStorage.getItem("email")) {
                    mes.push(data[key]);
                }
            }
            console.log(mes)
            setmessage(mes)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="c">
            <table className="">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>Prescription</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {message.map((mes, index) => (
                        <tr key={index}>
                            <td>{mes.sender}</td>
                            <td>{mes.prescription}</td>
                            <td>{mes.remarks}</td>
                            {/* <td><button className="btn btn-info" onClick={() => (window.location.href = `/message/${appointment.email}`)}>click</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Inbox;