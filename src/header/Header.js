import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
// import Photos from "../utils/image";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Header() {
  return (
    <div class="container-fluid mt-0">
    <div class="row g-1">
      <div class="col-2"></div>
      <div class="col-2 text-center">
        <h4>Overview</h4>
      </div>
      <div class="col-2"></div>
      <div class="col-2">
        <div class="card card-custom">
          <i class="bi bi-search"></i> Search...
        </div>
      </div>
      <div class="col-2">
        <div class="card card-custom">
          <i class="bi bi-gear"></i> Setting
        </div>
      </div>
      <div class="col-2">
        <div class="card card-custom">
          <i class="bi bi-person-circle"></i> Profile pic
        </div>
      </div>
    </div>
  </div>
  );
}
