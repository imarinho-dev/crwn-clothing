import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="absolute w-60 h-[340px] flex flex-col p-5 border border-solid border-black bg-white top-[90px] right-10 z-10">
			<div className="h-60 flex flex-col overflow-auto">
				{cartItems.map((item) => (
					<CartItem cartItem={item} key={item.id} />
				))}
			</div>
			<Button buttonStyle="text-[12px]" onClick={goToCheckoutHandler}>
				GO TO CHECKOUT
			</Button>
		</div>
	);
};

export default CartDropdown;
