import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="transition-all w-full flex flex-col h-[350px] my-0 items-center justify-center relative group">
			<img
				className="w-full h-[95%] object-cover mb-[5px] hover:opacity-80 transition-all"
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className="w-full h-[5%] flex justify-between text-lg">
				<span className="w-[90%] mb-[15px]">{name}</span>
				<span className="w-[10%]">{price}</span>
			</div>
			<Button
				buttonStyle="w-[80%] opacity-0 absolute top-[255px] group-hover:flex group-hover:opacity-80"
				buttonType="inverted"
				onClick={addProductToCart}
			>
				Add to card
			</Button>
		</div>
	);
};

export default ProductCard;
