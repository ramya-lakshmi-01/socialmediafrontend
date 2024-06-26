// RegisterForm.js
import React, { useState } from 'react';
import '../styles/register.css';

const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="register-wrapper">
            <h2>Register</h2>
            <form>
                <div className="input-group-register">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                </div>
                <div className="input-group-register">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="input-group-register">
                    <label htmlFor="password">Password</label>
                    <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Password" />
                    <button type="button" onClick={togglePasswordVisibility} className="show-password">
                        {passwordVisible ? 'Hide Password' : 'Show Password'}
                    </button>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
