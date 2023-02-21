import React /* ,

{Suspense}  */ from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Store'
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

//firebase:
// import {FirebaseAppProvider} from 'reactfire';
// import {firebaseConfig} from './firebaseConfig';

//axios:
axios.defaults.baseURL = "http://localhost:3500" && process.env.REACT_APP_API;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  // <Suspense fallback={"Conecting ..."}>
  // <ThemeProvider theme={theme}>
  < Provider store={store} >
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider >
  // </ThemeProvider> */

  // </Suspense>

  // </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
