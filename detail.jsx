import React, { useEffect, useState } from "react";
import './style/detail.css';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Detail() {
  const [format, setFormat] = useState({});
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  const final = () => {
    navigate('/Booking');
  };

  const handleLocation = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/price`, { params: { location, name } });
      setPrice(response.data.price);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
      } else {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/detail/${name}`);
        setFormat(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name]);

  return (
    <div>
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{format.name}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{format.model}</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>{format.display}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{format.speed}</td>
              </tr>
              <tr>
                <td>Mileage</td>
                <td>{format.milleage}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div>
        <p>For specific price detail, enter your location</p>
        <form onSubmit={handleLocation}>
          <input 
            type="text" 
            placeholder="Enter the location" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {price !== null && <p>Price: {price}</p>}
      </div>
      <div>
        <button onClick={final}>Booking</button>
      </div>
    </div>
  );
}

export default Detail;
