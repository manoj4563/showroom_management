import React, { useState } from "react";
import './style/register.css';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "" && age !== '' && name !== '') {
            axios.post('http://localhost:3001/register', { name, age, email, password })
                .then(Response => {
                    if (Response.data === 'sucess') {
                        console.log('Registration successful');
                        navigate('/');   
                    } else {
                        console.error(' failed');
                    }
                })
                .catch(error => {
                    console.error("There was an error registering!", error);
                });}

    }

    return (
        <form onSubmit={handleRegister}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Register</button>
            <p>Already have an account?</p>
            <a href="/">Click Me</a>
        </form>
    );
}

export default Register;