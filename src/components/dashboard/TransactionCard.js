import React from 'react';
import './TransactionCard.css'; // Assuming you have a CSS file for styling

const transactions = [
  { description: 'Deposit from my Card', date: '28 January 2021', amount: -850 },
  { description: 'Deposit Paypal', date: '25 January 2021', amount: 2500 },
  { description: 'Jemi Wilson', date: '21 January 2021', amount: 5400 },
];

const TransactionCard = () => {
  return (
    <>
 
    <div className="transaction-card">
      
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction">
          <div className="icon">📄</div>
          <div className="details">
            <div className="description">{transaction.description}</div>
            <div className="date">{transaction.date}</div>
            
          </div>
          <div className={`amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
              {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `+$${transaction.amount}`}
            </div>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default TransactionCard;
