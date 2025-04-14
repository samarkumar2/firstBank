import React from 'react';
import './Cards.css'; // Assuming you have some CSS for styling

const Cards = () => {
  return (
    <div className="card">
      <div className="card-balance">
        <h2>Balance</h2>
        <p>$5,756</p>
      </div>
      <div className="card-details">
        <p>CARD HOLDER</p>
        <h3>Eddy Cusuma</h3>
        <p>VALID THRU</p>
        <h3>12/22</h3>
      </div>
      <div className="card-number">
        <h3>3778 **** **** 1234</h3>
      </div>
    </div>
  );
};

export default Cards;
