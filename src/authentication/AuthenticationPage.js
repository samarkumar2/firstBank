import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, marginBottom: "30px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AuthenticationPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
       
        <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginInline: "0px",
        height: "100vh",
      }}
    >
   
           
  
      <Box
        sx={{
          width: "100%",
          border: "1px solid #fff",
          borderRadius: "15px",
          boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.1)",
        }}
        style={{
          paddingTop: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginInline: "35%",
        }}
      >
        <Box>
          <h4 className="text-center" style={{color:'burlywood'}}>FIRST BANK</h4>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="black"
            TabIndicatorProps={{ style: { background: "#ec0c21" } }}
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <div>
          <CustomTabPanel value={value} index={0}>
            <Login />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Register />
          </CustomTabPanel>
        </div>
      </Box>
    </div>
    </>
    
  );
};

export default AuthenticationPage;
