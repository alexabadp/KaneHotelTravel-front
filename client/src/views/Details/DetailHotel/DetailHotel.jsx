import Button from "react-bootstrap/Button";
import style from "./DetailHotel.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";

// const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)
const stripePromise = loadStripe(
  "pk_test_51MeUSYJo5kAZGuTWTiN6NsA5FRMyqId8smjQOgEObJw8rbCeHijt3N58dI0J5HfF48lROYvHLIzLE2QjAk8skODA00D3KU6iNb"
);

const DetailHotel = () => {
  const amountHardCode = 10; //10usd
  const descriptionHardCode = "Descripcion del pago"; //10usd
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation()
  const detailHotel = useSelector((state) => state.detailHotel);
  console.log(detailHotel, "detail hotel")

  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  return (
    <div>
      <div>
        <img src={detailHotel.image} alt="" />
      </div>
      <h4>{detailHotel.name}</h4>
      <h4>{detailHotel.category}</h4>
      <h4>{detailHotel.rating}</h4>
      <h4>{detailHotel.services}</h4>
      <h4>{detailHotel.description}</h4>
      <div>
        <Link
          to="/detail/booking"
          state={{
            name: detailHotel.name,
            image: detailHotel.image,
            rooms: detailHotel.rooms,
          }}
        >
          <Button className={style.buttonBooking} variant="primary" type="submit">
            Booking
          </Button> 
        </Link>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          totalPayment={amountHardCode}
          descriptionPayment={descriptionHardCode}
        />
      </Elements>
    </div>
  );
};

export default DetailHotel;
