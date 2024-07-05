// LoginForm.js
import React, { useState } from 'react';
import '../styles/login.css';
import axios from 'axios';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [formData, setFormData] = useState({})

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange =(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('formData', formData)
        axios.post("http://localhost:5003/user/login",formData).then(res=>{
            localStorage.setItem("user", JSON.stringify(res.data))
            window.location.href="/";
        })
    }

    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group-login">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={handleChange}/>
                </div>
                <div className="input-group-login">
                    <label htmlFor="password">Password</label>
                    <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Password" onChange={handleChange} />
                    <button type="button" onClick={togglePasswordVisibility} className="show-password">
                        {passwordVisible ? 'Hide Password' : 'Show Password'}
                    </button>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="form-footer">
                <a href="/register">Register</a>
                <a href="/forgot-password">Forgot Password?</a>
            </div>
        </div>
    );
};

export default LoginForm;
