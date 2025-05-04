import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import HandymanIcon from "@mui/icons-material/Handyman";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./SideBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export default function SideBar() {
  const classes = {
    accountBalanceIcon :{
      marginBottom: "5px",
      borderBottomRightRadius: '5px',
      borderBottom: '2px solid darkslategrey',
      backgroundColor:'lightblue'
     }
  }
  const sideMenu = [
    {
      id: 1,
      title: "Dashboard",
      icons: <DashboardIcon />,
      url: "dashboardPage",
    },
    { id: 2, title: "Transactions", icons: <CurrencyExchangeIcon />,url:"transactions" },
    { id: 3, title: "Accounts", icons: <PersonIcon /> },
    { id: 4, title: "Investments", icons: <PriceCheckIcon /> },
    { id: 5, title: "Credit Cards", icons: <CreditCardIcon /> },
    // { id: 6, title: "Loans", icons: <RealEstateAgentIcon /> },
    { id: 7, title: "Services", icons: <HandymanIcon /> },
    { id: 8, title: "My Privileges", icons: <LightbulbCircleIcon /> },
    { id: 9, title: "Setting", icons: <SettingsIcon />, url: "setting" },
  ];
  return (
    <div>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-md-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 "
                aria-current="true"
                style={classes.accountBalanceIcon}
              >
                <span style={{ fontSize: "1.5rem" }} >
                  <AccountBalanceIcon  style={{marginBottom: '5px'}}/>
                  First Bank
                </span>
              </a>

              {sideMenu?.map((items, index) => (
                <Nav.Link
                  className="im"
                  href={items.url}
                >
                  {items.icons}
                  <span className="menuTitle">{items.title}</span>
                </Nav.Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
