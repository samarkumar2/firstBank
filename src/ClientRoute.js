import React, { lazy, useEffect, useState, Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { addEmp } from "./redux-toolkit/EmpSlice";
import { useDispatch } from "react-redux";
import ClientLayout from "./layout/ClientLayout";
import { ClipLoader } from "react-spinners"; // Import the spinner component

const AuthenticationPage = lazy(() =>
  import("./authentication/AuthenticationPage")
);
const DashboardPage = lazy(() => import("./pages/dashboard/Dashboard"));
const TransactionPage = lazy(() => import("./pages/transaction/Transaction"));
const Setting = lazy(() => import("./pages/settings/Setting"));
const Login = lazy(() => import("./authentication/Login"));
const Register = lazy(() => import("./authentication/Register"));

function ClientRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const dispatch = useDispatch();

  const dataFetch = async () => {
    const storedUserDataString = localStorage.getItem("userData");
    if (storedUserDataString !== null && storedUserDataString !== undefined) {
      try {
        const storedUserData = JSON.parse(storedUserDataString);
        if (typeof storedUserData === "object" && storedUserData !== null) {
          setUserData(storedUserData);
          dispatch(addEmp(storedUserData));
        } else {
          console.error("Stored data is not an object:", storedUserData);
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
    setLoading(false); // Set loading to false after data is fetched
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboardPage"
          element={
            <Suspense
              fallback={
                <ClipLoader size={50} color={"#123abc"} loading={true} />
              }
            >
              <ClientLayout component={DashboardPage}></ClientLayout>
            </Suspense>
          }
        />
        <Route
          path="/transactions"
          element={
            <Suspense
              fallback={
                <ClipLoader size={50} color={"#123abc"} loading={true} />
              }
            >
              <ClientLayout component={TransactionPage}></ClientLayout>
            </Suspense>
          }
        />
        <Route
          path="/setting"
          element={
            <Suspense
              fallback={
                <ClipLoader size={50} color={"#123abc"} loading={true} />
              }
            >
              <ClientLayout
                component={Setting}
                userData={userData}
              ></ClientLayout>
            </Suspense>
          }
        />
        {!isAuthenticated && (
          <Route
            path="/*"
            element={
              <Suspense
                fallback={
                  <ClipLoader size={50} color={"#123abc"} loading={true} />
                }
              >
                <AuthenticationPage
                  LoginComponent={Login}
                  RegisterComponent={Register}
                />
              </Suspense>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default ClientRoute;
