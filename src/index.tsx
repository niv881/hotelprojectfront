import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextWrapper } from "./utils/DarkModeContext";
import { HotelContextProvider } from "./utils/HotelsContext";
import { AuthContextProvider } from "./utils/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
  <HotelContextProvider>
  <DarkModeContextWrapper>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DarkModeContextWrapper>
  </HotelContextProvider>
  </AuthContextProvider>
);
reportWebVitals();
