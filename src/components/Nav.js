import React, {useState} from "react";
import logo from '../images/Logo.svg';
const Nav = ()=>{
    const [menuOpen, setMenuOpen]= useState(false);
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    }
    const handleLinkClick = (event) => {
        event.preventDefault();
        alert("Page will be coming soon");
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a  href = "/" className="logo">
                <img src={logo} alt='logo'/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
    
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href  ='/'>Home</a>
                </li>
                <li>  
                    <a href='/' onClick={handleLinkClick}>About</a>
                </li>  
                <li>
                    <a href='/' onClick={handleLinkClick}>Services</a>
                </li> 
                <li>  
                    <a href='/Menu'>Menu</a>
                </li> 
                <li>  
                    <a href='/' onClick={handleLinkClick}>Reservations</a>
                </li> 
                <li>
                    <a href='/' onClick={handleLinkClick}>Order Online</a>
                </li>   
                <li>
                    <a href='/' onClick={handleLinkClick}>Login</a>
                </li>  
            </ul>

        </nav>
    )
};
export default Nav;
