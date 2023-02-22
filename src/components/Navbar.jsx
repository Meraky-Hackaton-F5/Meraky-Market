import { NavLink } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className="nav-container" >
            <div className="navbar">
                {/* <img className="logo-Craft" src={Logo} alt="LogoCraft"></img> */}
                <NavLink to="/" className="navbar-home">Home</NavLink>
                <NavLink to="/form" className="navbar-Products">Ofrece un servicio</NavLink>
                <NavLink to="/advertisement" className="navbar-DashBoard">Anuncios</NavLink>
                <h1 className="navbar-Cart"> 🛒</h1>
            
            </div>
            
        </nav>
    );
};

export default Navbar;
