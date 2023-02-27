import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities, getHotels } from "../../../redux/actions";

const CategoryFilterActivities = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const options = [
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

  const handlerCategoryFilter = (event) => {
    dispatch(getActivities(params.city, event.value));
  };

  return (
    <div>
      <label>Category</label>
      <Select options={options} onChange={handlerCategoryFilter} />
    </div>
  );
};

export default CategoryFilterActivities;