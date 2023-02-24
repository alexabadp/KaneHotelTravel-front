// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
// import Hotels from "./components/Hotels/Hotels";
// import DetailCity from "./views/DetailCity/DetailCity";

import axios from "axios";
import DetailCity from "./views/Details/DetailCity/DetailCity";
import DetailHotel from "./views/Details/DetailHotel/DetailHotel";
import DetailActivity from "./views/Details/DetailACtivity/DetailActivity";
import Hotels from "./components/Hotel/Hotels";
import Activities from "./components/Activity/Activities";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<DetailCity />} />
        <Route path="/:city/hotel/:hotel" element={<DetailHotel />} />
        <Route path="/:city/activity/:activity" element={<DetailActivity />} />
        <Route path="/:city/hotels" element={<Hotels />} />
        <Route path="/:city/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
