import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/bike.css';
import CT100 from './images/ct100.jpeg';
import Green from './images/green.jpeg';
import Platina from './images/platinum.jpeg';

function Bike() {
    const navigate = useNavigate();

    const handleDetail = (bikeName) => {
        navigate(`/detail/${bikeName}`);
    };

    return (
        <div id="main">
            <div className="bike-item CT" onClick={() => handleDetail('CT100')}>
                <img src={CT100} alt="CT100" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia
                    rerum aperiam quibusdam eveniet, amet placeat quas
                    voluptas animi quae modi vel non voluptatem esse qui saepe vitae. Blanditiis, officia.
                </p>
            </div>
            <div className="bike-item green" onClick={() => handleDetail('DOMINAR')}>
                <img src={Green} alt="Dominar" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis porro consequuntur eveniet alias eligendi, voluptatum placeat repellendus eaque, autem, illum laborum iusto
                    architecto. Eum assumenda odio, deleniti optio maiores deserunt!
                </p>
            </div>
            <div className="bike-item platinum" onClick={() => handleDetail('PLATINA')}>
                <img src={Platina} alt="Platina" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, expedita!
                    Tempore quas ipsa, ea autem sed, voluptate vitae eos molestias
                    nisi sapiente quibusdam laborum optio nesciunt eligendi recusandae incidunt quisquam.
                </p>
            </div>
        </div>
    );
}

export default Bike;
