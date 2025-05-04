import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Payment from './PaymentForm';

const QuickTransfer = () => {
  const [amount, setAmount] = useState(525.50);

  return (
    <div className="card" data-test-id="card-layout" style={{ width: '25rem'  }}>
    <div className="card-body">
  
      <div className="input-group mb-3" >
        <span className="input-group-text" id="basic-addon1" data-test-id="write-amount-label">Write Amount</span>
        <input 
        data-test-id="write-amount-input"
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
         <Payment data-test-id="payment-component"/>
     
    </div>
  </div>
  );
};

export default QuickTransfer;
