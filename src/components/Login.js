// LoginForm.js
import React, { useState } from 'react';
import '../styles/login.css';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <form>
                <div className="input-group-login">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                </div>
                <div className="input-group-login">
                    <label htmlFor="password">Password</label>
                    <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Password" />
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
