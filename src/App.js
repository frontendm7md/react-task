import SideBar from "./components/sidebar";
import TopBar from "./components/topbar";
import Page from "./components/page";

function App() {
    return (
        <div className="app">
			<SideBar />
			<div className="right-side">
				<TopBar />
				<Page />
			</div>
		</div>
    );
}

export default App;
