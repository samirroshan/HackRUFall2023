import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Axios from "axios";
import { redirect } from "react-router-dom";
export default function Login(){
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigator = useNavigate();


    const [errorMessage, setErrorMessage] = useState("");

    // AIzaSyB30g5c3hPRifabUOA-CVFHZy-zhMpXq0U
    
 
    function login(){
         Axios.post("http://localhost:1000/user/login", {firstname:firstname, lastname:lastname, password:password, email:email}).then((response) => {
            if(response.data.loginStatus){
                localStorage.setItem("loginStatus",true);
                navigator("/dashboard");
                localStorage.setItem("firstname", response.data.firstname);
                localStorage.setItem("lastname", response.data.lastname);
                localStorage.setItem("password", response.data.password);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("DOB", response.data.DOB);
                
                setErrorMessage(response.data.message);
            }
            else{
                setErrorMessage(response.data.message);
            }
         })
    }

    return(
        <div className="Login">
            <div className="login">
                <br></br>
                <input type="text" placeholder="First Name" onChange={(event) => {setFirstname(event.target.value)
                console.log(firstname)}}></input>
                <br></br>
                <input type="text" placeholder="Last Name" onChange={(event) => {setLastname(event.target.value)
                console.log(lastname)}}></input>
                <br></br>
                <input type="text" placeholder="Email" onChange={(event) => {setEmail(event.target.value)
                console.log(email)}}></input>
                <br></br>
                <input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)
                console.log(password)}}></input>
                <br></br>
                <button onClick={login}>Login</button>
                if(errorMessage != null){errorMessage};
                else{
                    navigator("/login")
                 }     
            </div>
        </div>
    

)
}