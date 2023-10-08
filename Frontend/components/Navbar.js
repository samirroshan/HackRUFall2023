import { useEffect, useState } from "react";
import "../App.css";
export default function Navbar(){

    const [loginStatus, updateLoginStatus] = useState(false);

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("loginStatus");
        updateLoginStatus(storedLoginStatus === "true");
    }, []);

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.setItem("loginStatus", false);
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        updateLoginStatus(false);
    };
    
    return(
        <div className="Navbar">


            {!loginStatus ? (
                <>
                    <a href="/login">Login</a>
                    <br></br>
                    <a href="/register">Register</a>
                </>
            ) : (
                <>
                    <a href="/dashboard">Your Dashboard</a>
                    <br></br>
                    <a href= <Chat /> >ChatBot</a>
                    <br></br>
                    <a href="/login" onClick={handleLogout}>Logout</a>
                    
                </>
            )}  
        </div>
    );   
}
