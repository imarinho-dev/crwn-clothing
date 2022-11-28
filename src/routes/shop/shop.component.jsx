import { useContext } from "react";

import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="w-full">
			<div className="container grid grid-cols-4 mx-auto gap-x-[10px] gap-y-[50px]">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
