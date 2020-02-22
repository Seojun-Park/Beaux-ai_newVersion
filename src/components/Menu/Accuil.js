import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Header from '../Header';
import Footer from '../Footer';

import './MenuBar.css';

class Accuil extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="menu_title">
                    <div className="menu_title ac_logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="menu_title ac_content">
                        <p>Le gâteau spécial, pour la personne spéciale, pour le jour spécial</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Accuil;