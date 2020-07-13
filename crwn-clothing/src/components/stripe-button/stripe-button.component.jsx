import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GqMHgHCPyPtRWnWKguAJ6ptBRbR7i4fQm9JfsqT2IaD1oUF75mrkQOQdYMqCoEuhU0ilKUfYMUFZhk3mLT5f0IT00L3LwrcRg';

  const onToken = token => {
    console.log(token)
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      dexcription={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;