import React,{useState} from "react";
import "./Login.css";

import { Link } from "react-router-dom";
const Login = ({onClose}) => {
   
    return (
        <div className="fulllog">
            <button className="closebtn" onClick={onClose}>X</button>
            <div id="mid-div">
                <div>
                    <img
                        src="https://th.bing.com/th/id/OIP.ic6vXZ809mtBUKu_8dknPAHaC4?w=312&h=136&c=7&r=0&o=5&pid=1.7"
                        alt="Logo"
                    />
                </div>
                <div id="m1">
                    <div id="m2">
                        <div>
                            <h1 id="si">Sign in</h1>
                            <div className="edd">
                                <div className="ema">
                                    <label htmlFor="email">
                                        Email or mobile phone number
                                    </label>
                                    <br />
                                    <input type="text" id="email" />
                                    <br />
                                </div>
                                <button id="but">Continue</button>
                                <p>
                                    By continuing, you agree to Amazon's Conditions of
                                    <br />
                                    Use and Privacy Notice.
                                </p>
                                <ul className="rem">
                                    <li><a href="#d">Need help?</a></li>
                                </ul>
                                <hr />
                                <h3 id="bw">Buying for work?</h3>
                                <a id="ba" href="">
                                    Shop on Amazon Business
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="help-section">
                    <div className="line"></div>
                    <div className="content">New to Amazon?</div>
                    <div className="line"></div>
                </div>
               <Link className="but23" to="/Signup"> <div className="but1">
                    <button >Create Your Amazon Account?</button>
                </div></Link>
            </div>

         
        </div>
    );
};

export default Login;
