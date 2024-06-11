import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import '../css/AdminLoginPage.css';
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';


function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation (replace with actual validation logic)
        if (username === 'admin' && password === 'admin123') {
            // Redirect to admin panel
            navigate('/admin-panel');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="AdminPanelLogin-container">
            <form className="AdminPanelLogin-form" onSubmit={handleSubmit}>
                <div className="admin-login-heading">
                    <img src={logo} alt="Brand Logo" />
                    <h2>Admin Login</h2>
                </div>
                <div className="AdminPanelLogin-form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="AdminPanelLogin-form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="AdminPanelLogin-form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}





export default AdminLoginPage;
