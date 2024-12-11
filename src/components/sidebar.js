import { useContext } from "react";
import { ThemeContext } from "../App";

function SideBar() {
      let { theme } = useContext(ThemeContext);
	return (
		<div className={"side-bar" + (theme === "light" ? "" : " dark")}>
                  <img src={"/media/logo.jpg"} alt=""></img>
			<div className="side-btns">
                        <div className="hovered"></div>
                        <ion-icon name="grid-outline" id="checked"></ion-icon>
                        <ion-icon name="people-outline"></ion-icon>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                        <ion-icon name="document-text-outline"></ion-icon>
                        <ion-icon name="calendar-clear-outline"></ion-icon>
                        <ion-icon name="folder-outline"></ion-icon>
                  </div>
		</div>
	);
}

export default SideBar;
