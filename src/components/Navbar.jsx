import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from '../assets/logomeraki.png';


const Navbar = () => {
    return (
        <nav className="nav-container" >
            <div className="navbar">
                {/* <img className="logo-Craft" src={Logo} alt="LogoCraft"></img> */}
                <NavLink to="/" className="navbar-home"><img src={logo} alt="" className='logo' /></NavLink>
                <NavLink to="/form" className="navbar-Products"><p>Ofrece un servicio</p></NavLink>
                <NavLink to="/advertisement" className="navbar-DashBoard"><p>Anuncios</p></NavLink>
               
            
            </div>
            
        </nav>
    );
};

export default Navbar;
