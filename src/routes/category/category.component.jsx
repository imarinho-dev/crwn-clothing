import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../context/categories.context";

import "./category.styles.scss";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className="container mx-auto">
			<h2 className="text-[38px] font-bold tracking-widest mb-6 text-center uppercase">
				{category}
			</h2>
			<div className="grid grid-cols-4 gap-x-5 gap-y-12">
				{products &&
					products.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
		</div>
	);
};

export default Category;
