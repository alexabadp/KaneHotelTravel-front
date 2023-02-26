import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import {loadStripe} from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import style from './CheckoutForm.module.css'

const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)

const CheckoutForm = () =>{
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if(!error){
      console.log(paymentMethod);
    }else{
      console.log("Error: -> ",error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={style.paymentForm}>
      <CardElement />
      <button>
        Reservar
      </button>
    </form>
  )
}

const DetailHotel = () => {
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
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default DetailHotel;
