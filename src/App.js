import LineChart from "./components/linechart/LineChart";
import { Piechart } from "./components/piechart/Piechart";
import Header from "./header/Header";

import Account from "./components/accounts/Account";
import SideBar from "./SideBar/SideBar";
import Cards from "./components/Cards/Cards";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Header />
        </div>
      
          <Card
            number={"1234 1231 3453"}
            name={"samar"}
            expiry={"12/45"}
            focused={true}
          />
   
      </div>

      {/* <Account/>
    
     <LineChart/> */}
    </div>
  );
}

export default App;
