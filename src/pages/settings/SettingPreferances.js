import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, FormControlLabel } from '@mui/material';

const SettingPreferances = () => {
  const [currency, setCurrency] = useState('USD');
  const [timeZone, setTimeZone] = useState('[GMT-12:00] International Date Line West');
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const handleToggle = (notification) => {
    setNotifications((prev) => ({
      ...prev,
      [notification]: !prev[notification],
    }));
  };

  const handleSave = () => {
    const settings = {
      currency,
      timeZone,
      notifications,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings saved!');
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">Currency</label>
          <input
            type="text"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="timeZone" className="form-label">Time Zone</label>
          <select
            id="timeZone"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="form-control"
          >
            <option value="[GMT-12:00] International Date Line West">[GMT-12:00] International Date Line West</option>
            {/* Add more time zones as needed */}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Notification</label>
          <FormControlLabel
            control={<Switch checked={notifications.digitalCurrency} onChange={() => handleToggle('digitalCurrency')} />}
            label="I send or receive digital currency"
          />
          <FormControlLabel
            control={<Switch checked={notifications.merchantOrder} onChange={() => handleToggle('merchantOrder')} />}
            label="I receive merchant order"
          />
          <FormControlLabel
            control={<Switch checked={notifications.recommendations} onChange={() => handleToggle('recommendations')} />}
            label="There are recommendations for my account"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default SettingPreferances;



