import React from "react";
import './style/home.css';
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const navigate = useNavigate();

    const img1 = () => {
        navigate('/Bike');
    };

    const img2 = () => {
        navigate('/Scooty');
    };

    const img3 = () => {
        navigate('/Escooty');
    };
    

    return (
        
            <div className="main">
                
               
    
               <button onClick={img1}>Bike</button>
                <button onClick={img2}>Scooty</button>
                <button onClick={img3}>Escooty</button>
            </div>
                
            
            
        
    );
}

export default Home;
