import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const RootApp = () => (

    <ThemeProvider>
      <App />
    </ThemeProvider>
);
render(<RootApp />, document.getElementById("root"));