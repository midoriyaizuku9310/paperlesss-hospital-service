import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
 return(
  <div>
  <div style={{
    backgroundImage: "url('https://images.pexels.com/photos/13697925/pexels-photo-13697925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    maxWidth: "100%"
  }}>
    <div style={{
      minHeight: "100vh",
      // textShadow: "2px 2px #cccccc",
      // textAlign: "left"
    }}>
      <h1 className="welcome">WELCOME TO OUR APP!</h1>
      <p className="tagline">We are here to serve...</p>
            
    </div>
  </div>
  <footer>
    <p>© 2023 Deloitte Development LLC. All rights reserved.</p>
    <nav>
        <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="./contactus">Contact Us</a></li>
        </ul>
    </nav>
</footer>

  </div>
 );
};

export default Home;
