import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import CityCard from "../CityCard/CityCard";
import styles from "./CityContainer.module.css";
=======
import CityCard from "../CityCard/CitiCard";
import style from "./CityContainer.module.css"
>>>>>>> 2b9907031be73447ace28d2a5d77c8beff95826e

const CityContainer = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);

  return (
<<<<<<< HEAD
    <div className={styles.cityContainer}>
      <h1>Ciudades</h1>
      <div className={styles.cityContainerCard}>
        {cities.length ? (
          cities.map((e) => {
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
          })
        ) : (
          <h1>No se encontraron ciudades</h1>
        )}
=======
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
>>>>>>> 2b9907031be73447ace28d2a5d77c8beff95826e
      </div>
    </div>
  );
};

export default CityContainer;
