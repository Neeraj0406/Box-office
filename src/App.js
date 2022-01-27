import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import "bootstrap/dist/css/bootstrap.min.css";
import Show from "./Pages/Show";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/starred" element={<Starred />}></Route>
        <Route exact path="shows/:id" element={<Show />} />
        <Route> Page Not Found! </Route>
      </Routes>
    </>
  );
};

export default App;
