import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import BasicModal from "../components/Modal/BasicModal";
import { addEmp } from "../redux-toolkit/EmpSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const empData = useSelector((state) => state.emps);

  useEffect(() => {
    // Retrieve the data from local storage
    const storedUserDataString = localStorage.getItem('userData');

    if (storedUserDataString !== null && storedUserDataString !== undefined) {
        try {
            // Parse the JSON string back into an object
            const storedUserData = JSON.parse(storedUserDataString);

            // Check if the parsed data is an object
            if (typeof storedUserData === 'object' && storedUserData !== null) {
                // Set the data in the component's state
                setUserData(storedUserData);
                dispatch(addEmp(storedUserData));
            } else {
                console.error('Stored data is not an object:', storedUserData);
            }
        } catch (error) {
            console.error('Error parsing stored data:', error);
        }
    }
}, []);

  console.log(userData);
// const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Please enter all the fields");
      return setLoading(true)
     
    }
    
    if(userData.email == email && userData.password == password){
      navigate("/dashboardPage");

    }
 
    
  };

  return (
    <>
   
      <form
        style={{ marginLeft: "auto", margin: "auto" }}
        onSubmit={handleSubmit}
      >
       
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <button
          type="submit"
          onClick={()=>setLoading(true)}
          style={{ width: "100%", backgroundColor: "#ec0c21", color: "white" }}
        >
          Login
        </button>
      </form>
    
      
    </>
  );
};

export default Login;
