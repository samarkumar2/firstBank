import React, { useState, useEffect, useCallback, lazy } from "react";
import "./DashBoard.css"; // Make sure to create a corresponding CSS file for styling

import Card from "react-credit-cards";
// import BarCharts from "../../components/barchart/BarChart";
import { Piechart } from "../../components/piechart/Piechart";
import QuickTransfer from "./QuickTransfer";
// import LineGraph from "../../components/linechart/LineGraph";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { transactions } from "../../JSON/JsonData";
import useUsers from "../../components/customHook/useUsers";

const BarCharts = lazy(() => import("../../components/barchart/BarChart"));
// const Piechart = lazy(() => import("../../components/piechart/Piechart"));
const LineGraph = lazy(() => import("../../components/linechart/LineGraph"));

const Dashboard = () => {
  const [showAll, setShowAll] = useState(false);

  const dispatch = useDispatch();
  const empData = useSelector((state) => state.emps);
  const cardDetail = useCallback(
    useSelector((state) => state.detail.cardDetails),
    []
  );

  const handleToggle = useCallback(() => {
    setShowAll(!showAll);
  }, [showAll]);

  let user = useUsers("https://jsonplaceholder.typicode.com/users");
  console.log(user);

  return (
    <div className="dashboard">
      <div className="row my-card-section">
        <div className="row">
          <div className="col-5 my-card-header">
            <h5>My Cards</h5>
          </div>

          <div className="col-3 see-all-btn">
            <p className="see-all" onClick={() => handleToggle()}>
              {showAll ? "See Less" : "See More"}
            </p>
          </div>
          <div className="col-3 ">
            <h5>Recent Transaction</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-8 my-cards">
            {!showAll
              ? cardDetail
                  .slice(0, 2)
                  ?.map((items, index) => (
                    <Card
                      key={index}
                      number={items.number}
                      name={items.name}
                      expiry={items.expiry}
                      focused={items.focused}
                    />
                  ))
              : cardDetail?.map((items, index) => (
                  <Card
                    key={index}
                    number={items.number}
                    name={items.name}
                    expiry={items.expiry}
                    focused={items.focused}
                  />
                ))}
          </div>
          <div className="col-4">
            <div className="transaction-card">
              {transactions.map((transaction, index) => (
                <div key={index} className="transaction">
                  <div className="icon">📄</div>
                  <div className="details">
                    <div className="description">{transaction.description}</div>
                    <div className="date">{transaction.date}</div>
                  </div>
                  <div
                    className={`amount ${
                      transaction.amount < 0 ? "negative" : "positive"
                    }`}
                  >
                    {transaction.amount < 0
                      ? `-$${Math.abs(transaction.amount)}`
                      : `+$${transaction.amount}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="row">
            <div className="col-8">
              <h5>Weekly Activity</h5>
            </div>
            <div className="col-4">
              <h5>Expense Statistics</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <BarCharts />
            </div>
            <div className="col-4">
              <Piechart />
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="row">
            <div className="col-6">
              <h5>Quick Transfer</h5>
            </div>
            <div className="col-5">
              <h5>Balance History</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <QuickTransfer />
            </div>
            <div className="col-5">
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
