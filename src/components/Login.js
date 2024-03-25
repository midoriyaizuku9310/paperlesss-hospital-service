import React, { useContext, useState } from "react";
// import firebase from "firebase/app";
import firebase from "../services/FbServices";
import "firebase/auth";
import "./Resgistration.css";
import { db } from "../services/FbServices";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/FbServices";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
//import "./login.css";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setUser({ name: email });
        localStorage.setItem("email", email);
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        alert('Invalid Credentials')
        console.log(error);
      });
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="e">
      <div className=""  >
        <head>
          <title>Login Form</title>
        </head>
        <body>

          <h3>USER LOGIN</h3>
          <form  className='forml'onSubmit={handleLogin} >
            <table align="center" cellPadding="10" style={{ backgroundColor: "white" }}>
              <tr>
                <td style={{fontWeight:"bold"}}>EMAIL</td>
                <td>
                  <input
                  style={{backgroundColor:"whitesmoke", width:"100%"}}
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr style={{backgroundColor:"white"}}>
                <td style={{fontWeight:"bold"}}>PASSWORD</td>
                <td>
                  <input
                  style={{backgroundColor:"whitesmoke", width:"100%"}}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                </td>
              </tr>
              <tr align="center">
                <td>
                <button style={{ backgroundColor: "grey", textAlign: "center", fontWeight: "bold" }} type="button" onClick={handleLogin}>LOGIN</button>
                </td>
                <td>
                <button style={{ backgroundColor: "grey", textAlign: "center", fontWeight: "bold" }} type="submit" onClick={handleReset}>
                  RESET
                </button>
                </td>
              </tr>
            </table>
          </form>
        </body>
      </div>
    </div>
  );
};

export default Login;

// import React, { useContext, useState } from "react";
// import firebase from "../services/FbServices";
// import "firebase/auth";
// import { db } from "../services/FbServices";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../services/FbServices";
// import { UserContext } from "../UserContext";
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//   const { setUser } = useContext(UserContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         setUser({ name: email });
//         history.push('/home');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleReset = () => {
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="containerl">
//       <head>
//         <title>Login Form</title>
//       </head>
//       <body>
//         <h3>USER LOGIN</h3>
//         <form onSubmit={handleLogin}>
//           <table align="center" cellPadding="10">
//             <tr>
//               <td>EMAIL</td>
//               <td>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>PASSWORD</td>
//               <td>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td colSpan="4" align="left"></td>
//               <button type="submit">Login</button>
//               <button type="submit" onClick={handleReset}>
//                 Reset
//               </button>
//             </tr>
//           </table>
//         </form>
//       </body>
//     </div>
//   );
// };

// export default Login;
