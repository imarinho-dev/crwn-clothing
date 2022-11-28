//import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
	google:
		"!bg-[#4285f4] !text-white transition-all hover:!bg-[#357ae8] hover:!border-transparent",
	inverted:
		"!bg-white !text-black !border !border-solid !border-black !transition-all hover:!bg-black hover:!text-white hover:!border-transparent",
};

const Button = ({ children, buttonType, buttonStyle, ...otherProps }) => {
	return (
		<button
			className={`min-w-[165px] w-auto h-[50px] tracking-[0.5px] leading-[50px] px-[35px] text-[15px] bg-black text-white uppercase font-bold border border-transparent cursor-pointer flex justify-center transition-all hover:text-black hover:bg-white hover:border hover:border-black hover:border-solid ${BUTTON_TYPE_CLASSES[buttonType]} ${buttonStyle}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
