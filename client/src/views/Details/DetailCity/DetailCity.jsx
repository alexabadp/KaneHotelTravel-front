import styles from "./DetailCity.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailCity } from "../../../redux/actions";
import { useEffect } from "react";
import HotelContainer from "../../../components/Hotel/HotelContainer/HotelContainer";
import ActivityContainer from "../../../components/Activity/ActivityContainer/ActivityContainer";

const DetailCity = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const detailCity = useSelector((state) => state.detailCity);

  useEffect(() => {
    dispatch(getDetailCity(params.city));
  }, []);

  const city = params.city;

  return (
    <div>
      <HotelContainer hotels={detailCity.hotels} />

      <Link to={`/${city}/hotels`}>MAS HOTELES</Link>

      <ActivityContainer activities={detailCity.activities} />
      <Link to={`/${city}/activities`}>MAS ACTIVIDADES</Link>
    </div>
  );
};
export default DetailCity;
