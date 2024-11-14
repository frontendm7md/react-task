import SideBar from "./components/sidebar";
import TopBar from "./components/topbar";

function App() {
  return (
    <div className="app">
			<SideBar />
			<div className="right-side">
				<TopBar />
			</div>
		</div>
  );
}

export default App;
