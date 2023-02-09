import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo/logo.svg';

/**
 * Header
 * 
 * @component Header containing logo and navigation to be place on the top of the app screen
 */
const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" className="logo">
                <Logo />
                <h1>SportSee</h1>
            </NavLink>
            
            <nav className="header__horizontalNav">
                <ul className="header__horizontalNav__navLink">
                    <NavLink to="/" className="header__horizontalNav__navLink__elmt">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/" className="header__horizontalNav__navLink__elmt">
                        <li>Profil</li>
                    </NavLink>
                    <NavLink to="/" className="header__horizontalNav__navLink__elmt">
                        <li>Réglages</li>
                    </NavLink>
                    <NavLink to="/" className="header__horizontalNav__navLink__elmt">
                        <li>Communauté</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header

