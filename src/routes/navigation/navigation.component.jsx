import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

//import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className="w-full">
				<div className="container mx-auto flex justify-between h-[70px] mb-6">
					<Link className="h-16 w-16 flex justify-center items-center " to="/">
						<CrwnLogo className="logo" />
					</Link>
					<div className="flex justify-end items-center w-1/2 h-full">
						<Link className="py-2 px-3 cursor-pointer" to="/shop">
							SHOP
						</Link>
						{currentUser ? (
							<span className="py-2 px-3 cursor-pointer" onClick={signOutUser}>
								{" "}
								SIGN OUT{" "}
							</span>
						) : (
							<Link className="py-2 px-3 cursor-pointer" to="/auth">
								SIGN IN
							</Link>
						)}
						<CartIcon />
					</div>
					{isCartOpen && <CartDropdown />}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
