import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CityCard from "../CityCard/CityCard";
import styles from "./CityContainer.module.css";

const CityContainer = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);

  return (
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
      </div>
    </div>
  );
};

export default CityContainer;
