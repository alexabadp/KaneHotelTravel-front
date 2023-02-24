<<<<<<< HEAD
import styles from "./ActivityCard.module.css";

const ActivityCard = (props) => {
  return (
    <div className={styles.activityCardContainer}>
      <img
        src={props.image}
        alt={props.name}
        className={styles.activityCardImage}
      />
      <div className={styles.activityCardInfo}>
=======
import style from "./ActivityCard.module.css"

const ActivityCard = (props) => {
  return (
    <div className={style.activityCardContainer}>
        <img src={props.image} alt={props.name} />
      

>>>>>>> 2b9907031be73447ace28d2a5d77c8beff95826e
        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.price}</h4>
        <h4>{props.duration}</h4>
        <h4>{props.description}</h4>
<<<<<<< HEAD
        <button
          to={`/activity/${props.id}`}
          className={styles.activityCardButton}
        >
          Saber más
        </button>
      </div>
=======
      
>>>>>>> 2b9907031be73447ace28d2a5d77c8beff95826e
    </div>
  );
};

export default ActivityCard;
