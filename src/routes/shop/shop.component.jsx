import { useContext } from "react";

import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="w-full">
			<div className="container grid grid-cols-4 mx-auto gap-y-10 gap-x-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
