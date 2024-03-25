import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import UserDetails from "./UserDetails";
import Menubar from "./Menubar";
import Logout from "./Logout";
import EditUserDetails from "./EditUserDetails";
import UserDashboard from "./UserDashboard";
import AdminEdit from "./AdminEdit";
import Appointments from "./appointments";
import Payment from "./payment";
import BookingData from "./bookings";
import DoctorLogin from "./DoctorLogin";
import DoctorDashboard from "./DoctorDashboard";
import DoctorAppointments from "./DoctorAppointments";
import Message from "./Message";
import Inbox from "./Inbox";
import BookTest from "./BookTest";
import TestPayment from "./TestPayment";
import ContactUs from "./ContactUs";


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Menubar />
        </>
        <div className="">
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="UserDashboard" element={<UserDashboard />} />
            <Route exact path="logout" element={<Logout />} />
            <Route path="UserDetails" element={<UserDetails />} />
            <Route path="doctorlogin" element={<DoctorLogin />} />
            <Route path="doctordashboard" element={<DoctorDashboard />} />
            <Route path="booktest" element={<BookTest />} />
            <Route path="testpayment" element={<TestPayment />} />
            <Route path="AdminEdit/:userId" element={<AdminEdit />} />
            <Route path="message/:email" element={<Message />} />
  
            <Route
              exact
              path="edituserdetails/:email"
              element={<EditUserDetails />}
            />
            <Route path="doctorappointments" element={<DoctorAppointments />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="payment" element={<Payment />} />
            <Route exact path='appointment' element={<Appointments />} />
            <Route exact path='bookings' element={<BookingData />} />
            <Route exact path='contactus' element={<ContactUs/>}></Route>

            {/* <Route exact path="" element={<Home />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

// const AppRoutes = () => {
//     return (
//         <>
//             <p>App Routes Component</p>
//         </>
//     );
// };

// export default AppRoutes;
