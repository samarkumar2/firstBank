import LineChart from "./components/linechart/LineChart";
import { Piechart } from "./components/piechart/Piechart";
import Header from "./header/Header";

import Account from "./components/accounts/Account";
import SideBar from "./SideBar/SideBar";
import Cards from "./components/Cards/Cards";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import CustomCards from "./components/Cards/Cards";
import "./App.css";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="row mb-4">
            <Header />
          </div>
          <div className="row my-card-section">
            <div className="row" >
              <div className="col-5 my-card-header" >
                <h5>My Cards</h5>
              </div>
          
              <div className="col-3 see-all-btn">
                <p className="see-all">See All</p>
              </div>
            </div>
            <div className="row">
              <div className="col-9 my-cards">
                <Card
                  number={"1234 1231 3453"}
                  name={"samar"}
                  expiry={"12/45"}
                  focused={true}
                />
                <Card
                  number={"1234 1231 3453"}
                  name={"samar"}
                  expiry={"12/45"}
                  focused={true}
                />
              </div>
              <div className="col-4">
                <CustomCards />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Account/>
    
     <LineChart/> */}
    </div>
  );
}

export default App;
