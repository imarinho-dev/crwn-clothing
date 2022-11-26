import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div
			className="w-[45px] h-[45px] relative flex justify-center items-center cursor-pointer"
			onClick={toggleIsCartOpen}
		>
			<ShoppingIcon className="h-6 w-6" />
			<span className="absolute bottom-3 text-[10px] font-bold">0</span>
		</div>
	);
};

export default CartIcon;
