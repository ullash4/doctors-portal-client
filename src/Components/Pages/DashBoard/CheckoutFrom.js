import React, {useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const CheckoutFrom = () => {
    const stripe = useStripe();
    const [cardError, setCardError]= useState()
    const elements = useElements()
    const handleSubmit =async(event)=>{
        event.preventDefault()
        
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          setCardError(error?.message || '')
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
      <CardElement 
      className='bg-white mb-5 p-10 rounded-xl text-purple-500 font-extrabold' 
      />
      {cardError && <p className='text-red-500'>{cardError}</p>}
      <button className='btn btn-sm mt-5 btn-primary' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default CheckoutFrom;