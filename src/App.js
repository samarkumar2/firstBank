import React,{useState,useEffect} from "react";
import './styles/style.css'
import ClientRoute from "./ClientRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <div className="container-fluid">
        {/* {!isAuthenticated && <AuthenticationPage />} */}
        <ClientRoute />
      {/* <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Dashboard />
        </div>
      </div> */}
    </div>
  );
}

export default App;
