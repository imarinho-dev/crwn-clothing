import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Hqd5RJnVLl8tK4wCP9RQPF71SSjLPJLdf0b6uUz5jy9RPLXoIwbajSF08Td48L9JmnLGncbj3FEwmabNibefc9z00n5mJM74i';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
