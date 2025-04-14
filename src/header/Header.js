import * as React from "react";
import './Header.css'

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import Photos from "../utils/image";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Header() {
  return (
    <div className="container-fluid mt-1">
    <div className="row ">
   
      <div className="col-5 text-center mt-2" >
        <h4>Overview</h4>
      </div>
     
      <div className="col-4">
        <div className="card-custom">
          <SearchIcon htmlColor="secondary"/> Search for something
        </div>
      </div>
      <div className="col-1">
        <div className="card-setting">
          <SettingsIcon/>
        </div>
      </div>
      <div className="col-1">
        <div className="card-setting">
          <NotificationsActiveOutlinedIcon/>
        </div>
      </div>
      <div className="col-1">
        <div className="card-setting">
         <AccountBoxIcon/>
        </div>
      </div>
    </div>
  </div>
  );
}
