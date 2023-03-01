import Button from "react-bootstrap/Button";
import style from "./DetailHotel.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./DetailHotel.module.css";
import NavBar from "../../../components/NavBar/NavBar";

const DetailHotel = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const detailHotel = useSelector((state) => state.detailHotel);
  console.log(detailHotel, "detail hotel");

  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  return (
    <div className={styles.containerDetailHotel}>
      <NavBar />
      <div className={styles.containerDivDetail}>
        <h4 className={styles.title}>{detailHotel.name}</h4>

        <div className={styles.containerDivImg}>
          <img src={detailHotel.image} alt="" />
        </div>

        <h4>{"Category: " + detailHotel.category}</h4>
        <h4>{"Rating: " + detailHotel.rating + " " + " Stars"}</h4>

        <div className={styles.containerServicesDescription}>
          <p>{detailHotel.services}</p>
          <p>{detailHotel.description}</p>
        </div>
      </div>

      <div>
        <Link
          to="/detail/booking"
          state={{
            name: detailHotel.name,
            image: detailHotel.image,
            rooms: detailHotel.rooms,
          }}
        >
          <Button
            className={style.buttonBooking}
            variant="primary"
            type="submit"
          >
            Booking
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailHotel;
