import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AccountCard() {
  return (
 
        <div className="container" style={{width:'10rem',borderRadius:'5px',backgroundColor:'grey'}}>
          <div className="row">
             <div className="col-sm-6"><PersonIcon fontSize="large"/></div>
             <div className="col-sm-6">
                <div className="col">
                    <div className="col-sm-6">My Balance</div>
                    <div className="col-sm-6">$12,750</div>

                </div>
             </div>

          </div>
        </div>
  
  );
}
