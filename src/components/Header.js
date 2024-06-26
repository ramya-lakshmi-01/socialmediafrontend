// Header.js
import React from 'react';
import '../styles/header.css';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Social Media App</div>
            <nav className="nav">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/profile"><FaUserCircle size={24} /></a>
            </nav>
        </header>
    );
};

export default Header;
