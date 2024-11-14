import user from "../data/user";

function SideBar() {
	return (
		<div className="side-bar">
            <img src={user.logo} alt=""></img>
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
