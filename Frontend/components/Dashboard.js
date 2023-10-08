import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Axios from "axios";

export default function Dashboard(){
            const [firstname, setFirstname] = useState("");
            const [lastname, setLastname] = useState("");
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [DOB, setDOB] = useState("");

            setFirstname(localStorage.getItem("firstname"));
            setLastname(localStorage.getItem("lastname"));
            setEmail(localStorage.getItem("email"));
            setDOB(localStorage.getItem("DOB"));
            setPassword(localStorage.getItem("password"));
    
    return(
        <div className="dashboard">
            First Name: {firstname}
            <br></br>
            Last Name: {lastname}
            <br></br>
            Date Of Birth: {DOB}
            <br></br>
            Email: {email}
            <br></br>
            Password: {password}
            <br></br>
            <a href="./Map.js"> Volunteering Opportunities</a>
        </div>
    )
}