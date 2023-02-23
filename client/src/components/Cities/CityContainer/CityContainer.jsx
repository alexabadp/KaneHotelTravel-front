import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CityCard from "../CityCard/CitiCard";
import style from "./CityContainer.module.css"

const CityContainer = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);

  return (
    <div className={style.cityContainer}>
       <div className={style.cityContainerWelcome}>
            <h1>¡Bienvenido!</h1>
            <p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
        </div>
      <div className={style.cityContainerCard}>
        {cities?.map((e) => {
          return (
            <div key={e.id}>
              <Link to={e.name}>
                <CityCard
                  id={e.id}
                  image={e.image}
                  name={e.name}
                  popularity={e.popularity}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityContainer;
