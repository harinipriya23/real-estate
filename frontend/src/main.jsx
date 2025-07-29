import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/real-estate">
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </BrowserRouter>
  </StrictMode>
);
