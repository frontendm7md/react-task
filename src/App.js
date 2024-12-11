import { createContext, useState } from "react";
import SideBar from "./components/sidebar";
import TopBar from "./components/topbar";
import Page from "./components/page";

let ThemeContext = createContext();

function App() {
	let [theme, setTheme] = useState("light");
    return (
		<ThemeContext.Provider value={{theme, setTheme}}>
            <div className="app">
		    	<SideBar />
		    	<div className="right-side">
		    		<TopBar />
		    		<Page />
		    	</div>
		    </div>
		</ThemeContext.Provider>
    );
}

export default App;
export { ThemeContext };
