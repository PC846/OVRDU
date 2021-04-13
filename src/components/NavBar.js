import React from 'react'
import './CSS/NavBar/NavBar.css'

const NavBar = () => {
    return (
        <nav className="menu">
                <ul className="menu-ul">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">OUR MISSION</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#subscript">SUBSCRIPTIONS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>

        </nav>

    )
}

export default NavBar
