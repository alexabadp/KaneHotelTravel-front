const HotelCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.rating}</h4>
        <h4>{props.services}</h4>
        <h4>{props.description}</h4>
        {/* <Link to={`/hotel/${props.id}`} className={styles.button}>
          Saber más
        </Link> */}
      </div>
    </div>
  );
};

export default HotelCard;
