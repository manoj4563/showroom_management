import React from "react";
import'./style/scooty.css';
import CT100 from './images/bajaj-chetak-electric.jpg';
import Green from './images/Bajaj-Chetak.jpg';
import platina from './images/e-scooty.jpeg';
import { useNavigate } from "react-router-dom";

function Scooty(){
    const navigate = useNavigate();
    const handleDetail = (bikeName) => {
        navigate(`/detail/${bikeName}`);
    };
    return(
        <div className="main">
            <div className="bike-item CT" onClick={() => handleDetail('CT100')}>
                <img id="img1" src={CT100} alt="npoo"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos autem minus, adipisci nisi obcaecati temporibus quis voluptatem veritatis eum 
                    earum rerum ex incidunt officia accusantium. Corrupti, sed cupiditate. Sed, maxime.
                </p>
            </div>
            <div className="bike-item CT" onClick={() => handleDetail('CT100')}>
                <img id="img2" src={Green} alt="noo"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex libero quasi fugiat praesentium. 
                    Cum natus dolore sed aut explicabo iure? Eum sunt voluptatem, sed iste tenetur qui fugiat quisquam.
                </p>
            </div>
            <div className="bike-item CT" onClick={() => handleDetail('CT100')}>
                <img id="img3" src={platina} alt="noo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Iure amet rerum numquam aut eveniet, doloribus molestias blanditiis
                     debitis odio dicta similique exercitationem eum sit quae nulla qui nihil quam perferendis!
                </p>
            </div>
            
            
        </div>
    )
}
export default Scooty;