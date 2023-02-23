const CityCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <h3>{props.popularity}</h3>
      </div>
    </div>
  );
};

export default CityCard;
