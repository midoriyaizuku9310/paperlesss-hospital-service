import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Message() {
    const params = useParams()
    const [prescription, setPrescription] = useState("")
    const [remarks, setRemarks] = useState("")
    const navigate = useNavigate()
    console.log(params.email)
    const handleSend = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender: localStorage.getItem("email"),
                receiver: params.email,
                prescription : prescription,
                remarks : remarks
            })
        }
        const res = fetch(
            'https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/Message.json',
            options
        )
        if (res) {
            alert("sent")
            // localStorage.removeItem('date');
            // localStorage.removeItem('timeSlot');
            // localStorage.removeItem('problem');
            // localStorage.removeItem('doctor')
        }
        else {
            alert("not sent")
        }
        navigate('/doctordashboard')
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '70px' }}>
            <label for="prescription" className=''>prescription</label>
            <br />
            <textarea id="prescription" name="prescription" rows="4" cols="50" onChange={(e)=>{setPrescription(e.target.value)}}></textarea>
            <br />
            <label for="remarks" className=''>remarks</label>
            <br />
            <textarea id="remarks" name="remarks" rows="4" cols="50" onChange={(e)=>{setRemarks(e.target.value)}}></textarea>
            <br />
            <button className='btn btn-info my-5' onClick={handleSend}>Send</button>
        </div>
    )
}

export default Message