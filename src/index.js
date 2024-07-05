import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import Header from "./components/Header";
import CreateEditPost from "./components/CreateEditPost";
import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/login" Component={LoginForm}></Route>
        <Route exact path="/register" Component={RegisterForm} />
        <Route exact path="/create" Component={CreateEditPost} />
        <Route exact path="/edit/:post_id" Component={CreateEditPost} />
        <Route exact path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
