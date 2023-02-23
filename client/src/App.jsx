// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Hotels from "./components/Hotels/Hotels";

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:city/hotel" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
