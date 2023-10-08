// import Axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import Axios from "axios";
export default function Register(){
    
        const [errorMessage, setErrorMessage] = useState("");

        // const firstname = document.getElementById('firstname').value;
        // const lastname = document.getElementById('lastname').value;
        // const email = document.getElementById('email').value;
        // const password  = document.getElementById('password').value;

        // if(!firstname || !lastname || !email || !password) {
        //     alert('Please enter firstname, lastname, email and password');
        //     return;
        // }

        // const userData = {
            
        
            const [firstname, setFirstname] = useState("");
            const [lastname, setLastname] = useState("");
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [DOB, setDOB] = useState("");

            const navigator = useNavigate();
             function register(){
                console.log(typeof firstname);
                console.log(typeof lastname);
                console.log(typeof email);
                console.log(typeof password);
                Axios.post("http://localhost:1000/user", {firstname:firstname, lastname:lastname, password:password, email:email, DOB:DOB}).then((response) => {
                
                setErrorMessage(response.data.message);

                if (errorMessage != null) {
                    return redirect("/dashboard");
                    }
                
                // localStorage.setItem("firstname", response.data.firstname);
                // localStorage.setItem("lastname", response.data.lastname);
                // localStorage.setItem("password", response.data.password);
                // localStorage.setItem("email", response.data.email);
                
                
            
                
         })
                
            }
            function login(){
                
                navigator("/login");
            }
        
            return(
                <>
                        <div className="register1">
                            <h1>Welcome to BlahBlahBlah. Here you can get help from volunteers or be a volunteer.</h1>
                            <br></br>
                            To get started, please register. 
                        </div>
                        
                        <div className="register2">
                            <input type="text" placeholder="First Name" onChange={(event) => {setFirstname(event.target.value)}}></input>
                            <br></br>
                            <input type="text" placeholder="Last Name" onChange={(event) => {setLastname(event.target.value)}}></input>
                            <input type="text" placeholder="Date of Birth" onChange={(event) => {setDOB(event.target.value)}}></input>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}></input>
                            <br></br>
                            <input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}></input>
                            <br></br>
                            <br></br>
                            <button onClick={register}>Register</button>
                            <br></br>
                            {errorMessage}
                        </div>
                        <br></br>
                        <div className="register3">
                            Already have an account?
                            <br></br>
                            <button onClick={login}>Login</button>
                        </div>
                        
                </>
                
                
        
        
            )
        }
// }