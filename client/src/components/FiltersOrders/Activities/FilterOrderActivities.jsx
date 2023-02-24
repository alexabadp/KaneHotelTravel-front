import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities } from "../../../redux/actions";

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

const FilterOrderActivities = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerPrice = (event) => {
    setPrice(event.value);
  };

  useEffect(() => {
    dispatch(getActivities(params.city, category, price));
  }, [category, price]);

  return (
    <div>
      <label>Category</label>
      <Select options={options1} onChange={handlerCategory} />
      <br />
      <br />
      <Select options={options2} onChange={handlerPrice} />
    </div>
  );
};

export default FilterOrderActivities;
