import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailActivity } from "../../../redux/actions";
import styles from "./DetailActivity.module.css"

const DetailActivity = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const detailActivity = useSelector((state) => state.detailActivity);

  useEffect(() => {
    dispatch(getDetailActivity(params.activity));
  }, []);
  return (
    
    <div className={styles.containerDivDetail}>

      <div className={styles.containerDetailActivity}>

        <h4 className={styles.title}>{detailActivity.name}</h4>

        <div className={styles.containerDivImg}>
          <img src={detailActivity.image} alt="" />
        </div>

        <div className={styles.containerDescription}>
          <h4>{"Category: " +  detailActivity.category + ""}</h4>
          <h4>{"Duration: " +  detailActivity.duration + " Min"}</h4>
          <h4>{"Price: $" +  detailActivity.price}</h4>
          <p>{detailActivity.description + "."}</p>
        </div>

      </div>

    </div>

  );
};

export default DetailActivity;
