import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IcoBiking } from '../assets/icons/verticalNav/biking.svg';
import { ReactComponent as IcoBodybuilding } from '../assets/icons/verticalNav/bodybuilding.svg';
import { ReactComponent as IcoSwimming } from '../assets/icons/verticalNav/swimming.svg';
import { ReactComponent as IcoYoga } from '../assets/icons/verticalNav/yoga.svg';

/**
 * Vertical Nav
 * 
 * @component Vertical bar of navigation to be place on the left of the app screen
 */
const VerticalNav = () => {
    return (
        <nav className="verticalNav">
            <ul className="verticalNav__navLink">
                <NavLink to="/" className="verticalNav__navLink__elmt">
                    <li>
                        <IcoYoga />
                    </li>
                </NavLink>
                <NavLink to="/" className="verticalNav__navLink__elmt">
                    <li>
                        <IcoSwimming />
                    </li>
                </NavLink>
                <NavLink to="/" className="verticalNav__navLink__elmt">
                    <li>
                        <IcoBiking />
                    </li>
                </NavLink>
                <NavLink to="/" className="verticalNav__navLink__elmt">
                    <li>
                        <IcoBodybuilding />
                    </li>
                </NavLink>
            </ul>

            <div className="copyright"> 
                <small>Copyright, SportSee 2020</small>
            </div>
        </nav>
    );
};

export default VerticalNav;

