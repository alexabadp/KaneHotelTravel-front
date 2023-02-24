import { Link, useParams } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

const HotelContainer = (props) => {
  const hotels = props.hotels;
  const params = useParams()
  
 
  return (
    <div>
      <h1>Hoteles</h1>
      <div>
        {hotels?.length ? (
          hotels.map((c) => {
            return (
              <div key={c.id}>
                <Link to={`/${c.city}/hotel/${c.name}`} state={{city: params.city}}>
                  <HotelCard
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    category={c.category}
                    rating={c.rating}
                    description={c.description}
                    services={c.services}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h4>No se encontraron Hoteles</h4>
        )}
      </div>
    </div>
  );
};

export default HotelContainer;
