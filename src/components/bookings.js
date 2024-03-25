import React, { useState, useEffect } from 'react';
import "./UserDetails.css";

const BookingData = () => {
    const [bookings, setBookings] = useState([]);
    const email = localStorage.getItem('email')
    useEffect(() => {
        // Fetch data from Firebase
        // fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Convert the fetched object into an array of bookings
        //         const fetchedBookings = Object.keys(data).map(key => {
        //             return {
        //                 id: key,
        //                 date: formatDate(new Date(data[key].date)),
        //                 timeSlot: data[key].timeSlot,
        //                 problem: data[key].problem,
        //                 doctor: data[key].doctor
        //             };
        //         });
        //         setBookings(fetchedBookings);
        //     })
        //     .catch(error => console.error('Error fetching data:', error));

        fetch('https://paperless-hospital-servi-e34f8-default-rtdb.firebaseio.com/bookingData.json')
            .then(response => response.json())
            .then(data => {
                const fetchbookings = [];
                for (const key in data) {
                    console.log(data[key])
                    // console.log(data[key]['Email'])
                    if (data[key]['email'] == email) {
                        console.log(email)
                        fetchbookings.push(data[key]);
                    }
                }
                console.log(fetchbookings)
                setBookings(fetchbookings);
            })
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);
    
    const formatDate = (date) => {
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <div>
            <h3>BOOKING DATA</h3>
            <table>
                <thead>
                    <tr>
                        <th >Date</th>
                        <th>Time Slot</th>
                        <th>Problem</th>
                        <th>Doctor</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.date.slice(0,15)}</td>
                            <td>{booking.timeSlot}</td>
                            <td>{booking.problem}</td>
                            <td>{booking.doctor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingData;