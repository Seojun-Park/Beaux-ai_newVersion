import React from 'react';
import {Link} from 'react-router-dom';

import './MenuBar.css';


const Menubar = (props) =>(
    <ul className="menu">
        <li>
            <Link to="/Accuil">
                Accuil
            </Link>
        </li>
        <li>
            <Link to="/NousSommes">
                Nous Sommes
            </Link>
        </li>
        <li>
            <Link to="/NosGateaux">
                Nos Gâteaux
            </Link>
        </li>
        <li>
            <Link to="/NosService">
                Nos Service
            </Link>
        </li>
        <li>
            <Link to="/">
                Contact
            </Link>
        </li>
    </ul>
)

export default Menubar;