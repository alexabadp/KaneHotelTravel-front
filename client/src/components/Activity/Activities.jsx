import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivities } from "../../redux/actions";

import FilterOrderActivities from "../FiltersOrders/Activities/FilterOrderActivities";

import ActivityContainer from "./ActivityContainer/ActivityContainer";

const Activities = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities(params.city));
  }, []);

  console.log(activities);

  return (
    <div>
      <FilterOrderActivities />
      <br />
      <br />
      <ActivityContainer activities={activities.activities} />
    </div>
  );
};

export default Activities;
