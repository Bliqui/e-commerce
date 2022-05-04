import {NavBar} from "./components/NavBar/NavBar";
import './App.css';
import {Outlet} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <NavBar />
                {/*<Route path="shoppingCart" element={<ShoppingCart/>}/>*/}
            <Outlet />
        </div>
    );
}

export default App;
