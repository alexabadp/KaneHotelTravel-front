import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm"

const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)

const DetailHotel = () => {
  const amountHardCode = 10;//10usd
  const descriptionHardCode = "Descripcion del pago";//10usd
  const dispatch = useDispatch();
  const params = useParams();
  const detailHotel = useSelector((state) => state.detailHotel);

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
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPayment={amountHardCode} descriptionPayment={descriptionHardCode}/>
      </Elements>
    </div>
  );
};

export default DetailHotel;
