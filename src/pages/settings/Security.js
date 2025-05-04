import React, { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";

export default function Security() {
  const [security, setSecurity] = useState({
    TwoFactorAuth: true,
    newpassowrd: "",
  });

  const handleToggle = (notification) => {
    setSecurity((prev) => ({
      ...prev,
      [notification]: !prev[notification],
    }));
  };

  const handleSave = () => {
    const securities = {
      security,
    };
    localStorage.setItem("securities", JSON.stringify(securities));
  };
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <div className="row">
            <label data-testid="two-factor-auth">Two-factor Authentication</label>
          </div>
          <div className="row">
            <FormControlLabel
              control={
                <Switch
                data-testid="two-factor-auth-btn"
                  checked={security.TwoFactorAuth}
                  onChange={() => handleToggle("TwoFactorAuth")}
                />
              }
              label="Enable or disable two factor authentication"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <label   data-testid="change-password">Change Password</label>
          </div>
          <div className="row">
            <div class="form-group m-3">
              <div className="row">
                <input
                data-testid="current-password"
                  type="email"
                  class="form-control"
                  id="CurrentPassword"
                  aria-describedby="Current Password"
                  placeholder="Current Password"
                />
              </div>
              <div className="row mt-4">
                <input
                   data-testid="new-password"
                  type="password"
                  class="form-control"
                  id="NewPassword"
                  placeholder="New Password"
                  value={security.newpassowrd}
                  onChange={(e) =>
                    setSecurity({ ...security, newpassowrd: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button type="button"  className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}
