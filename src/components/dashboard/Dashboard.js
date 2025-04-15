import React ,{useState} from "react";
import "./DashBoard.css"; // Make sure to create a corresponding CSS file for styling
import Header from "../../header/Header";
import Card from "react-credit-cards";
import TransactionCard from "./TransactionCard";
import BarCharts from "../barchart/BarChart";
import { Piechart } from "../piechart/Piechart";
import QuickTransfer from "./QuickTrasfer";
import LineGraph from "../linechart/LineGraph";
import "react-credit-cards/es/styles-compiled.css";
const Dashboard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const cardDetails = [
    {
      number: "1234 1231 3453 2456",
      name: "samar",
      expiry: "12/29",
      focused: "true",
    },
    {
      number: "1234 1231 3453 3456",
      name: "samie",
      expiry: "12/30",
      focused: "true",
    },
     { number:"1234 1231 3453 2456", name: 'samar', expiry: "12/29",focused:"true" },
  ];
  return (
    <div className="dashboard">
      <div className="row mb-4">
        <Header />
      </div>
      <div className="row my-card-section">
        <div className="row">
          <div className="col-5 my-card-header">
            <h5>My Cards</h5>
          </div>

          <div className="col-3 see-all-btn">
            <p className="see-all" onClick={()=>handleToggle()}>{showAll ? 'See Less' : 'See More'}</p>
          </div>
          <div className="col-3 ">
            <h5>Recent Transaction</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-8 my-cards">
         
            {!showAll ?cardDetails.slice(0,1)?.map((items, index) => (
             
              <Card
                key={index}
                number={items.number}
                name={items.name}
                expiry={items.expiry}
                focused={items.focused}
               
              />
            )):cardDetails?.map((items, index) => (
              <Card
                key={index}
                number={items.number}
                name={items.name}
                expiry={items.expiry}
                focused={items.focused}
              

              />))}
          </div>
          <div className="col-4">
            <TransactionCard />
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
