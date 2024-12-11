import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function TopBar() {
    let { theme, setTheme } = useContext(ThemeContext);
    const [iconName, setIconName] = useState("moon-outline");
    let changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setIconName((prevName) => (prevName === "moon-outline" ? "sunny-outline" : "moon-outline"));
    }
	return (
		<div className={"top-bar" + (theme === "light" ? "" : " dark")}>
			<div className="back">
                <ion-icon name="arrow-back-outline"></ion-icon>
                <h5>Back to dashboard</h5>
            </div>
			<div className="data">
                <ion-icon name={iconName} onClick={changeTheme} id="theme"></ion-icon>
                <div className="userData">
                    <img src={"/media/user-image.jpg"} alt=""></img>
                    <h5>Dr. Alex Hess</h5>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
            </div>
		</div>
	);
}

export default TopBar;
