import style from "./CityCard.module.css"
import img from "../../../images/Icon-Heart.png"

const CityCard = (props) => {
  return (
    <div className={style.cityCardContainer}>
      <div>
        <img src={props.image} alt="" className={style.cityCardImage}/>
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={style.img}>
      <img src={img} alt="" className={style.cityCardImage}/>
      <h3>{props.popularity}</h3>        
      </div>
    </div>
  );
};

export default CityCard;
