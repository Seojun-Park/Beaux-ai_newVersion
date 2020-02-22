import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './MenuBar.css';

import bojagi from '../../images/bojagi.JPG';

class NousSommes extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="sommes_content">
                    <div className="contents_title">
                        <h1>Qui sommes nous?</h1>
                        <h2>BEAUX-AGI</h2>
                    </div>
                    <div className="contents">
                        <img src={bojagi} alt="bojagi img"/>
                        <p>보자기(beaux-agi) :
                        Bojagi (etoffe) est une pièce de tissu utilisée dans
                    la tradition coréenne<br/> destinée à  emballer précieusement  des cadeaux à
                    l'occasion de mariages ou fêtes etc.<br/>Elle a également une signification de la chance.<br/><br/>
                    Nos gâteaux de riz vous proposent une anticipation comme lorsqu’on<br/> reçoit un
                    cadeau bien emballé par bojagi
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NousSommes;