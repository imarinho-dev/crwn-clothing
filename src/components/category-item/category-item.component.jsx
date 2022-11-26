//import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className="min-w-[30%] h-60 flex-auto flex justify-center items-center border border-solid border-black mx-2 mb-4 overflow-hidden hover:cursor-pointer first:mr-2 last:ml-2">
			<div
				className="w-full h-full hover:scale-110 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] duration-700 bg-cover bg-center"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="h-24 px-6 flex flex-col items-center justify-center border border-solid border-black bg-white opacity-70 absolute">
				<h2 className="font-bold mx-2 text-xl text-[#4a4a4a]">{title}</h2>
				<p className="text-base font-light">Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
