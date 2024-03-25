import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("email");
        localStorage.clear();
        navigate('/')
        window.location.reload();
    }, [])

    return (
        <div>
            <h1>We are logged out</h1>
        </div>
    );
};

export default Logout;