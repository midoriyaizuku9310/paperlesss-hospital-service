import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { useHistory } from 'react-router-dom'; // Import useHistory directly
import { useNavigate } from 'react-router-dom';
// import "./appointment.css"
import './appointments.css'
const availableTests = [
    'Full Body Checkup',
    'Diabetes',
    'Thyroid',
    'Vitamin Deficiency',
    'MRI Scan',
    'X-Ray',
    'BP',
    'Blood Test',
    'Covid Test'
];

const BookTest = () => {
    const [selectTest, setselectTest] = useState('');

    const navigate = useNavigate();

    const [Tests, setTests] = useState([]);

    useEffect(() => {
        fetchTests();
    }, [])
    const fetchTests = async () => {
        try {
            const response = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/TestDetails.json');
            if (!response.ok) {
                throw new Error('Failed')
            }
            const data = await response.json();
            const Test = [];

            for (const key in data) {
                console.log(data[key].doctor);
                if (data[key].email === localStorage.getItem("email")) {
                    Test.push(data[key]);
                }
            }
            setTests(Test)

        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = () => {
        localStorage.setItem("test", selectTest)
        navigate('/testpayment')
        // console.log(selectTest)
    }
    return (
        <div className='a'>
            <form method="POST" onSubmit={handleSubmit}>
                <div>
                    <label>Available Test:</label>
                    <select value={selectTest} onChange={(e) => { setselectTest(e.target.value) }}>
                        <option value="">Select test</option>
                        {availableTests.map((test) => (
                            <option key={test} value={test}>
                                {test}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>

            <br />
            <br />
            <br />
            {/* Previous Tests  */}
            <br />
            <table align='center' className='w-50'>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Previous Tests</th>
                    </tr>
                </thead>
                <tbody className=' text-black' style={{fontWeight:"bold"}}>
                    {
                        Tests.map((ele)=><tr>
                            {ele.test}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookTest;