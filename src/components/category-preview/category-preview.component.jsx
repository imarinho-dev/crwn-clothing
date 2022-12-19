import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col mb-7">
				<h2>
					<Link
						className="text-[28px] cursor-pointer mb-6 font-bold tracking-widest"
						to={title}
					>
						{title.toUpperCase()}
					</Link>
				</h2>
				<div className="grid grid-cols-4 gap-x-5">
					{products
						.filter((_, idx) => idx < 4)
						.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default CategoryPreview;
