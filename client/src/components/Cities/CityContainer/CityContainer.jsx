import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CityCard from "../CityCard/CitiCard";

const CityContainer = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);

  return (
    <div>
      <div>
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
