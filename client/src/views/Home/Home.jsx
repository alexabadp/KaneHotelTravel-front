import React from "react";
import { Link } from "react-router-dom";


const Home = () => { 
  return (
    <div>
       <Link to="/home/Cancun"><h1>Cancun</h1></Link>
       <Link to="/home/Puerto Vallarta"><h1>Puerto Vallarta</h1></Link>
       <Link to="/home/Playa Paraíso, Tulum"><h1>Playa Paraíso, Tulum</h1></Link>
    </div>
  ) 
  
};

export default Home;
