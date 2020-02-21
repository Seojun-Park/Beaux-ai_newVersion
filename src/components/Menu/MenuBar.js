import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';

const Menu = (props) =>(
    <ul className="menu">
        <li>
            <Link to="/">Accuil</Link>
        </li>
        <li>
            <Link to="/">Nous Sommes</Link>
        </li>
        <li>
            <Link to="/">Nos Gâteaux</Link>
        </li>
        <li>
            <Link to="/">Nos Service</Link>
        </li>
        <li>
            <Link to="/">Contact</Link>
        </li>
    </ul>
)

export default Menu;