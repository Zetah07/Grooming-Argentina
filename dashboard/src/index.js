import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contex/AuthProvider";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AuthProvider>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </AuthProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
