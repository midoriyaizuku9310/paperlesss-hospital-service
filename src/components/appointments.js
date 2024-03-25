import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { useHistory } from 'react-router-dom'; // Import useHistory directly
import { useNavigate } from 'react-router-dom';
import "./appointments.css";
// import './appointments.css';
const availableTimeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
];
 
const Appointments = () => {
    const [ProblemOptions, setProblemOptions] = useState([])
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [selectedProblem, setSelectedProblem] = useState('');
   
    const [professions, setProfessions] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
    // const history = useHistory();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/doctorDetails.json')
          .then(response => response.json())
          .then(data => {
            const professionsSet = new Set();
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                professionsSet.add(data[key].Profession);
              }
            }
            setProfessions(Array.from(professionsSet));
          })
          .catch(error => console.error('Error fetching professions:', error));
      }, []);
   
      useEffect(() => {
        if (selectedProfession) {
          fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/doctorDetails.json')
            .then(response => response.json())
            .then(data => {
              const filteredDoctors = [];
              for (const key in data) {
                if (data.hasOwnProperty(key) && data[key].Profession === selectedProfession) {
                  filteredDoctors.push(data[key].Name);
                }
              }
              setDoctors(filteredDoctors);
            })
            .catch(error => console.error('Error fetching doctors:', error));
        }
      }, [selectedProfession]);
   
      const handleProfessionChange = (e) => {
        setSelectedProfession(e.target.value);
        setSelectedDoctor('');
      };
   
      const handleDoctorChange = (e) => {
        setSelectedDoctor(e.target.value);
      };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
 
    const handleTimeSlotChange = (e) => {
        setSelectedTimeSlot(e.target.value);
    };
 
    const handleProblemChange = (e) => {
        setSelectedProblem(e.target.value);
        console.log("problem", e.target.value)
        // doctors.filter(x=>x.profession == e.target.value)
    };
 
   
 
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6; // Sunday: 0, Saturday: 6
    };
 
    const isHoliday = (date) => {
        // Add your holiday logic here
        // Return true if the date is a holiday, false otherwise
        return false;
    };
 
    const filterDates = (date) => {
        return isWeekday(date) && !isHoliday(date);
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        const res = await fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json');
        const existingAppointments = await res.json();
 
        // Iterate over the keys of existing appointments
 
        for (const key in existingAppointments) {
            if (existingAppointments.hasOwnProperty(key)) {
                const appointment = existingAppointments[key];
                console.log(appointment.date, selectedDate)
                console.log(appointment.timeSlot, selectedTimeSlot)
                console.log(appointment.problem, selectedProblem)
                if (
                    appointment.date == selectedDate &&
                    appointment.timeSlot == selectedTimeSlot &&
                    appointment.problem == selectedProfession &&
                    appointment.doctor == selectedDoctor
                ) {
                    console.log("inside")
                    alert("This appointment has already been booked. Please choose a different time or problem.");
                    return; // Stop further execution
                }
            }
        }
        // const options ={
        //   method:'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     date: selectedDate,
        //     timeSlot: selectedTimeSlot,
        //     problem: selectedProblem
        //   })
        // }
        // const res = fetch(
        //   'https://paperless-hospital-servi-bf1d1-default-rtdb.firebaseio.com/bookingData.json',
        //   options
        //   )
        //   if(res)
        //   {
        //     alert ("sent")
        //   }
        //   else{
        //     alert ("not sent")
        //   }
        //history.push('/payment')
        localStorage.setItem('date', selectedDate)
        localStorage.setItem('timeSlot', selectedTimeSlot)
        localStorage.setItem('problem', selectedProfession)
        localStorage.setItem('doctor', selectedDoctor)
        navigate('/payment')
    };
 
 
    // useEffect(()=>{
    //     doctors.filter((e) => e.Profession == selectedProblem)
    // }, [selectedProblem])
    return (
      <div className="b">
        <form method="POST" onSubmit={handleSubmit}>
            <div>
                <label>Date:</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    filterDate={filterDates}
                    className='dp'
                    placeholderText='Select a Date'
                    style={{backgroundColor:"black", color:"black"}}
                />
            </div>
            <div>
                <label>Time Slot:</label>
                <select value={selectedTimeSlot} onChange={handleTimeSlotChange}>
                    <option value="">Select a time slot</option>
                    {availableTimeSlots.map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>
                            {timeSlot}
                        </option>
                    ))}
                </select>
            </div>
            <div>
      <label htmlFor="profession">Select Profession:</label>
      <select id="profession" value={selectedProfession} onChange={handleProfessionChange}>
        <option value="">Select a profession</option>
        {professions.map((profession, index) => (
          <option key={index} value={profession}>{profession}</option>
        ))}
      </select>
     
      {selectedProfession && (
        <div>
          <label htmlFor="doctor">Select Doctor:</label>
          <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange}>
            <option value="">Select a doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>{doctor}</option>
            ))}
          </select>
        </div>
      )}
    </div>
            <button type="submit" style={{backgroundColor:"black", color:"white"}}>SUBMIT</button>
        </form>
        </div>
    );
};
 
export default Appointments;