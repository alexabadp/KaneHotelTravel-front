import style from "./ActivityCard.module.css"

const ActivityCard = (props) => {
  return (
    <div className={style.activityCardContainer}>
        <img src={props.image} alt={props.name} />
      

        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.price}</h4>
        <h4>{props.duration}</h4>
        <h4>{props.description}</h4>
      
    </div>
  );
};

export default ActivityCard;
