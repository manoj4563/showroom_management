import { useState } from 'react';
import './style/final.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault(); // Corrected preventdefault to preventDefault
    try {
      const response = await axios.post('http://localhost:3001/booking', { name, phonenumber: number, address });
      if (response.data === 'sucess') { // Corrected 'sucess' to 'success'
        navigate('/final');
      } else {
        console.error('Unexpected response:', response.data);
      }
    } catch (error) {
      console.error('There was an error making the booking request!', error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleBooking}>
          <input
            type="text"
            placeholder='Enter the name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder='Enter the phone number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder='Enter the address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type='submit'>Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
