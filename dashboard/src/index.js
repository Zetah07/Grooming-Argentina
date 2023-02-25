import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import'./index.css';
import App from './App';
import { AuthProvider } from "./contex/AuthProvider";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <BrowserRouter>
        <ContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="*" element={<App />} />
            </Routes>
          </AuthProvider>
          </ContextProvider>
      </BrowserRouter>
  );