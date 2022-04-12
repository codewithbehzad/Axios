import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

// default globals
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer Token";

// interceptors in Axios
//  request
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  // for error handling
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//  response
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  // for error handling
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const childRoot = ReactDOM.createRoot(document.getElementById('child-root'));
root.render(<App />);
// childRoot.render(<Child/>);
