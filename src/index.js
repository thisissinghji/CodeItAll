import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Practice,Free, Courses } from "./Container";
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/practice" element={<Practice/>}/>
            <Route path="/resources" element={<Courses/>}/>
            <Route path="/free" element={<Free/>}/>
        </Routes>
    </Router>
    , document.getElementById('root'));