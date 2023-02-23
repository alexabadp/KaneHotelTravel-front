import { Link } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivityContainer = (props) => {
  const activities = props.activities;

  return (
    <div>
      <h1>Activities</h1>
      <div>
        {activities?.length ? (
          activities.map((c) => {
            return (
              <div key={c.id}>
                <Link to={`/${c.city}/activity/${c.name}`}>
                  <ActivityCard
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    category={c.category}
                    price={c.price}
                    description={c.description}
                    duration={c.duration}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h4>No se encontraron Actividades</h4>
        )}
      </div>
    </div>
  );
};

export default ActivityContainer;
