import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import { getCities } from "../../redux/actions";
import style from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  });

  return (
    <div className={style.containerHome}>
      <Cities />
    </div>
  );
};

export default Home;
