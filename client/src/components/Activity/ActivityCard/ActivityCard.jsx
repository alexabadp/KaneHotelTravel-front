const ActivityCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.price}</h4>
        <h4>{props.duration}</h4>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
};

export default ActivityCard;
