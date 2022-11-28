const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<div className="w-full flex h-[80px] mb-[15px]">
			<img className="w-[30%]" src={imageUrl} alt={name} />
			<div className="w-[70%] flex flex-col justify-center items-start py-[10px] px-5">
				<span className="text-base">{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
