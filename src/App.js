import SideBar from "./SideBar/SideBar";
import Cards from "./components/dashboard/TransactionCard";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import CustomCards from "./components/dashboard/TransactionCard";
import "./App.css";
import TransactionCard from "./components/dashboard/TransactionCard";
import QuickTransfer from "./components/dashboard/QuickTrasfer";
import BarCharts from "./components/barchart/BarChart";
import LineGraph from "./components/linechart/LineGraph";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
