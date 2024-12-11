import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function TopBar() {
    let { theme, setTheme } = useContext(ThemeContext);
    const [iconName, setIconName] = useState("moon-outline");
    const [showUserData, setShowUserData] = useState(false);
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
                <div className="userData" onClick={() => setShowUserData(!showUserData)}>
                    <img src={"/media/user-image.jpg"} alt=""></img>
                    <h5>Dr. Alex Hess</h5>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                {showUserData && (
                    <div className={"user-menu" + (theme === "light" ? "" : " dark")}>
                        <div className="user-info">
                            <img src={"/media/user-image.jpg"} alt="User" />
                            <div>
                                <h4>Dr. Alex Hess</h4>
                                <span>alex@gmail.com</span>
                            </div>
                        </div>
                        <div className="profile-option">
                            <span>Create New Profile</span>
                        </div>
                        <div className="logout-option">
                            <span>Log Out</span>
                        </div>
                    </div>
                )}
            </div>
		</div>
	);
}

export default TopBar;
