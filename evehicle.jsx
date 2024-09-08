import React from "react";
import './style/evehicle.css';
import CT100 from './images/peps.jpg';
import Green from './images/jupiter.jpg';
import { useNavigate } from "react-router-dom";

function Escooty() {
  const navigate = useNavigate();

  const handleDetail = (bikeName) => {
    navigate(`/detail/${bikeName}`);
  };

  return (
    <div className="main">
      <div className="bike-item" onClick={() => handleDetail('CT100')}>
        <img src={CT100} alt="CT100" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
           asperiores mollitia odio ipsa quis. Quibusdam dolor mollitia cupiditate 
          quisquam voluptate, repudiandae quas. Ex libero velit, quos alias eveniet exercitationem fugiat.
        </p>
      </div>
      <div className="bike-item" onClick={() => handleDetail('DOMINAR')}>
        <img src={Green} alt="DOMINAR" />
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nulla ex autem et ipsum tempore molestiae. Consequatur
             officia dolorem odio vero, numquam rem, mollitia praesentium possimus nulla, tempora tempore harum dicta?
        </p>
      </div>
    </div>
  );
}

export default Escooty;
