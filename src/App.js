import logo from "./logo.svg";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import AppRoutes from "./components/AppRoutes";
import UserDetails from "./components/UserDetails";
import React, { useState, useEffect } from "react";
import UserDashboard from "./components/UserDashboard";
import { UserContext } from "./UserContext";
import EditUserDetails from "./components/EditUserDetails";
import Menubar from "./components/Menubar";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {/* <UserDashboard /> */}
        <AppRoutes />
      </div>
    </UserContext.Provider>
    // <div>
    //   <UserDetails />
    //   <EditUserDetails />
    // </div>
  );
}

export default App;
