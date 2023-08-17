
import { Outlet } from "react-router-dom";
import NavbarMain from "./Layout/NavbarMain";
import Footer from "./Layout/Footer";

function App() {
    return (
        <div> 
            <NavbarMain />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;