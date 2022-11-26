import Button from "../button/button.component";

//import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="absolute w-60 h-[340px] flex flex-col p-5 border border-solid border-black bg-white top-[90px] right-10 z-10">
			<div className="h-60 flex flex-col overflow-hidden " />
			<Button style={{ fontSize: "12px" }}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
