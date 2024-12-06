
function TopBar() {
	return (
		<div className="top-bar">
			<div className="back">
                <ion-icon name="arrow-back-outline"></ion-icon>
                <h5>Back to dashboard</h5>
            </div>
			<div className="data">
                <ion-icon name="moon-outline" id="theme"></ion-icon>
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
