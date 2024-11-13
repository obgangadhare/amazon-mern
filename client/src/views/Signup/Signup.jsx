import React from "react";
import "./Signup.css";

const Signup = () => {
   
    return (
        <div >



    <div className="logo">
        <img src="https://th.bing.com/th/id/OIP.ic6vXZ809mtBUKu_8dknPAHaC4?w=312&h=136&c=7&r=0&o=5&pid=1.7"/>
    </div>
    <div className="myFrom">
        <h2>Create account</h2>
        <label><b>Your name</b></label><br/>
        <input type="text" className="name"/><br/><br/>
        <div className="v2"></div>
        <label><b>Mobile number or email</b></label><br/>
        <input type="text" className="mobile"/><br/><br/>
        <div className="v1"></div>
        <label><b>Password</b></label><br/>
        <input type="password" className="pass" placeholder="At least 6 characters"/><br/>
        <br/>
        <div className="valclassName"></div>
        <label><b>Password again</b></label><br/>
        <input type="password" className="passag"/><br/>
        <button className="button">Create your Amazon account</button><br/><br/>
        <p class="dlr">By creating an account or logging in,you agree to Amazon's Conditions of Use and Privacy Policy.</p>


    </div>
    

   
        </div>
    );
};

export default Signup;
