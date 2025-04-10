import LineChart from './components/linechart/LineChart';
import {Piechart} from './components/piechart/Piechart'
import Header from './header/Header';

import Account from './components/accounts/Account';
import SideBar from "./SideBar/SideBar";
function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-3'>
        <SideBar/>
        </div>
        <div className='col-3'>
        <Piechart/>
        </div>
      </div>
    
    {/* <Account/>
    
     <LineChart/> */}
    </div>
  );
}

export default App;
