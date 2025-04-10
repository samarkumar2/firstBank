import React from 'react';
import './DashBoard.css'; // Make sure to create a corresponding CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="top-bar">
        <div className="logo">FirstBank</div>
        <input type="text" placeholder="Search for something" className="search-bar" />
      </header>
      <aside className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Accounts</li>
          <li>Investments</li>
          <li className="highlighted">Credit Cards</li>
          <li>Services</li>
          <li>My Privileges</li>
        </ul>
      </aside>
      <main className="main-content">
        <section className="overview">
          <h2>Overview</h2>
        </section>
        <section className="my-cards">
          <h3>My Cards</h3>
          <div className="card">
            <p>Balance: $5,756</p>
            <p>Card Holder: Eddy Cusuma</p>
            <p>Valid Thru: 12/22</p>
            <p>Card Number: 3778 **** **** 1234</p>
          </div>
          <div className="card">
            <p>Balance: $5,756</p>
            <p>Card Holder: Eddy Cusuma</p>
            <p>Valid Thru: 12/22</p>
            <p>Card Number: 3778 **** **** 1234</p>
          </div>
        </section>
        <section className="recent-transactions">
          <h3>Recent Transactions</h3>
          <ul>
            <li>Deposit from my Card (21 January 2021)</li>
            <li>Deposit Paypal (21 January 2021)</li>
            <li>Jemi Wilson (21 January 2021)</li>
          </ul>
        </section>
        <section className="weekly-activity">
          <h3>Weekly Activity</h3>
          {/* Placeholder for graph */}
          <div className="graph">Graph showing activity</div>
        </section>
        <section className="expense-statistics">
          <h3>Expense Statistics</h3>
          {/* Placeholder for pie chart */}
          <div className="pie-chart">Pie chart showing expense distribution</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;