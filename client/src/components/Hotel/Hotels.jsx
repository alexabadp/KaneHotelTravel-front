import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotels } from "../../redux/actions";
import FilterOrderHotels from "../FiltersOrders/Hotels/FilterOrderHotels";
import HotelContainer from "./HotelContainer/HotelContainer";

const Hotels = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels(params.city));
  }, []);

  return (
    <div>
      <FilterOrderHotels />
      <br />
      <br />
      <HotelContainer hotels={hotels.hotels} />
    </div>
  );
};

export default Hotels;
