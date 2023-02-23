import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import { getCities } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  });

  return (
    <div>
      {/* <Link to="/home/Cancun"><h1>Cancun</h1></Link>
       <Link to="/home/Puerto Vallarta"><h1>Puerto Vallarta</h1></Link>
       <Link to="/home/Playa Paraíso, Tulum"><h1>Playa Paraíso, Tulum</h1></Link> */}
      <Cities />
    </div>
  );
};

export default Home;
