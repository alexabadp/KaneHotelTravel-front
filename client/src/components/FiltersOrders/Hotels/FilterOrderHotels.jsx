import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getHotels } from "../../../redux/actions";

const options1 = [
  { label: "Economic", value: "Economic" },
  {
    label: "Regular",
    value: "Regular",
  },
  {
    label: "VIP",
    value: "VIP",
  },
];

const options2 = [
  { label: "ASC", value: "ASC" },
  {
    label: "DESC",
    value: "DESC",
  },
];

const FilterOrderHotels = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerRating = (event) => {
    setRating(event.value);
  };

  useEffect(() => {
    dispatch(getHotels(params.city, category, rating));
  });

  return (
    <div>
      <label>Category</label>
      <Select options={options1} onChange={handlerCategory} />
      <br />
      <br />
      <Select options={options2} onChange={handlerRating} />
    </div>
  );
};

export default FilterOrderHotels;
