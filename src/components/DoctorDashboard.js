import React from 'react'

function DoctorDashboard() {
    return (
        <div>
  <div style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1625134673337-519d4d10b313?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    maxWidth: "100%"
  }}>
    <div style={{
      minHeight: "100vh",
      // textShadow: "2px 2px #cccccc",
      textAlign: "left"
      
    }}>
     <h1 style={{color:"white", paddingLeft:"50px", paddingTop:"60px"}}>Welcome Doctor!</h1>
     <p style={{color:"white", paddingLeft:"50px", paddingTop:"10px"}}>We are here to serve...</p>      
    </div>
  </div>
  {/* <footer>
    <p>© 2023 Deloitte Development LLC. All rights reserved.</p>
    <nav>
        <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
</footer> */}

  </div>
    )
}

export default DoctorDashboard