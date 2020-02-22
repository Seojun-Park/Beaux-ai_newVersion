import React from 'react';
import './Common.css';
import Menubar from './Menu/MenuBar';
import Background from '../images/head_final.jpg';

const Header = () => (
    <div className="header">
        <div className="banner">
            <a href="/Accuil"><img src={Background} alt="background" /></a>
        </div>
        <div>
            <div className="menubar">
                <Menubar />
            </div>
        </div>
    </div>
)

export default Header;