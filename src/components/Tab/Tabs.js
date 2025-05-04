import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
const {firstComp,secondComp,thirdComp,settingLabel} = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {settingLabel?.map((items,index)=>(
             <Tab label={items} {...a11yProps(index)} />
            ))}
         
        </Tabs>
      </Box>
      {firstComp?<CustomTabPanel value={value} index={0}>
        {firstComp}
      </CustomTabPanel>:''}
      {firstComp?<CustomTabPanel value={value} index={1}>
        {secondComp}
      </CustomTabPanel>:''}
      {firstComp?<CustomTabPanel value={value} index={2}>
        {thirdComp}
      </CustomTabPanel>:''}
    </Box>
  );
}
