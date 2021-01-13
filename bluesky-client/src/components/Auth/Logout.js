import React, { useContext } from "react";

import { toast } from "react-toastify";
import { UserIcon } from "../Icons";
import { ThemeContext } from "../../context/ThemeContext";
import { Wrapper } from "../ToggleTheme";

const Logout = () => {
	const { theme } = useContext(ThemeContext);



	const handleLogout = () => {
		localStorage.clear();
		setTimeout(() => {
			window.location = "/";
		}, 2100);
		toast.success("You are logged out");
	};

	return (
		<Wrapper >
			<UserIcon sm color={theme.accentColor} />
			<p>Logout</p>
		</Wrapper>
	);
};

export default Logout;
