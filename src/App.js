import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import SignUp from "./components/pages/signUp";
import Products from "./components/pages/products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/products" exact Component={Products} />
          <Route path="/sign-up" exact Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
