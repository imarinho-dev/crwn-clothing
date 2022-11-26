//import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
	return (
		<div className="w-full">
			<div className="container mx-auto flex flex-wrap justify-between">
				{categories.map((category) => (
					<CategoryItem key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default Directory;
