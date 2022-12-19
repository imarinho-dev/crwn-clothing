import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);
	return (
		<div
			className="min-w-[30%] h-60 flex-auto flex justify-center items-center border border-solid border-black mx-2 mb-4 overflow-hidden hover:cursor-pointer group"
			onClick={onNavigateHandler}
		>
			<div
				className="w-full h-full hover:scale-110 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] duration-700 bg-cover bg-center"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="h-24 px-6 flex flex-col items-center justify-center border border-solid border-black group-hover:border-white bg-white group-hover:bg-black opacity-70 absolute">
				<h2 className="font-bold mx-2 text-xl text-[#4a4a4a] group-hover:text-white uppercase">
					{title}
				</h2>
				<p className="text-base font-light group-hover:text-white">Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
