import React /* ,

{Suspense}  */ from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "./contex/AuthProvider";
//firebase:
// import {FirebaseAppProvider} from 'reactfire';
// import {firebaseConfig} from './firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  // <Suspense fallback={"Conecting ..."}>
  // <ThemeProvider theme={theme}>
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
  // </ThemeProvider> */

  // </Suspense>

  // </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
