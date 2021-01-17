import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeContext } from "./context/ThemeContext";
import Router from "./Route";
import Auth from "./components/Auth/Auth";
import db from "./blue/db";

const App = () => {

  const { theme } = useContext(ThemeContext);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    setIsAuth(window.sessionStorage.getItem("isAuth"))
  })
   
  db.on('auth', ack => { 
    setIsAuth(true); 
    console.log('Authentication was successful: ', ack); })
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        toastClassName="toast-style"
        autoClose={2000}
        closeButton={false}
        draggable={false}
      />
      
      {isAuth ? <Router /> : <Auth />}
    </StyledThemeProvider>
  );
};

export default App;
