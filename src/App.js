import {NavBar} from "./components/NavBar/NavBar";
import './assets/styles/global.scss';
import {Outlet} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
