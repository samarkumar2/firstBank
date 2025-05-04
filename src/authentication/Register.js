import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addEmp } from "../redux-toolkit/EmpSlice";

import { randomId } from "@mui/x-data-grid-generator";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username:"",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
      id: randomId(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.username|| !user.password || !user.confirmPassword) {
      console.log("Please enter all the fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      console.log("passwords are not same");
      return;
    }

    dispatch(addEmp(user));

  // Convert the object to a JSON string
let userDataString = JSON.stringify(user);

// Store the JSON string in local storage
 localStorage.setItem('userData', userDataString);
 window.location.reload();

  };

  return (
    <>
      <form
        style={{ marginLeft: "auto", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your Name"
            required
            style={{
              width: "100%",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your Email"
            required
            style={{
              width: "100%",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Username:
          </label>
          <input
            type="username"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your username"
            required
            style={{
              width: "100%",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your Password"
            required
            style={{
              width: "100%",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="confirmPassword"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => handleChange(e)}
            placeholder="Confirm Password"
            required
            style={{
              width: "100%",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{ width: "100%", backgroundColor: "#ec0c21", color: "white" }}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
