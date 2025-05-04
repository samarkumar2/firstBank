import React, { useEffect, Suspense, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
import SideBar from "../SideBar/SideBar";
import Header from "../header/Header";
import styles from "./ClientLayout.module.scss";
function ClientLayout(props) {
  const pathName = useRef(window.location.pathname);
  useEffect(() => {
    if (window.location.pathname !== pathName) {
      pathName.current = window.location.pathname;
      window.scrollTo(0, 0);
    }
  });
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const { component: Component, ...rest } = props;
 
  return (
    <div>
      <SideBar />
      <div className={styles.layout}>
        <Header />
        <Suspense>
          <Component
            {...props}
            {...rest}
            navigate={useNavigate()}
            params={useParams()}
          />
        </Suspense>
      </div>
    </div>
  );
}
 
export default ClientLayout;