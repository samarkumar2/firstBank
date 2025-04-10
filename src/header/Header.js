import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
// import Photos from "../utils/image";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow:1,}}>
      <Grid container spacing={1}>
      <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <h4 className="text-center">Overview</h4>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Item><SearchIcon/>Search...</Item>
        </Grid>
        <Grid item xs={2}>
          <Item><SettingsIcon/>Setting</Item>
        </Grid>
        <Grid item xs={2}>
          <Item><AccountBoxIcon/>Profile pic</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
