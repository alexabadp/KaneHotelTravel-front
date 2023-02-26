import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import style from './CheckoutForm.module.css'

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

export default CheckoutForm;