import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from "./components/Activity/Activities";
import axios from "axios";
import CreateHotel from "./views/Forms/CreateHotel/CreateHotel";
import DetailActivity from "./views/Details/DetailACtivity/DetailActivity";
import DetailBooking from "./views/Details/DetailBooking/DetailBooking";
import DetailCity from "./views/Details/DetailCity/DetailCity";
import DetailHotel from "./views/Details/DetailHotel/DetailHotel";
import Home from "./views/Home/Home";
import Hotels from "./components/Hotel/Hotels";
import Landing from "./views/Landing/Landing";
import { loadStripe } from "@stripe/stripe-js";
import { Route, Routes } from "react-router-dom";
const server = loadStripe(import.meta.env.SERVER);
axios.defaults.baseURL = server;
// axios.defaults.baseURL = "http://localhost:3001"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />  
        <Route path="/home" element={<Home />} /> 
        <Route path="/home/:city" element={<DetailCity />} /> 
        <Route path="/home/:city/hotels" element={<Hotels />} /> 
        <Route path="/home/:city/activities" element={<Activities />} /> 
        <Route path="/home/:city/hotel/:hotel" element={<DetailHotel />} /> 
        <Route path="/home/:city/activity/:activity" element={<DetailActivity />} /> 
        <Route path="/detail/booking" element={<DetailBooking />} /> 
        <Route path="/backoffice/hotel/create" element={<CreateHotel />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
