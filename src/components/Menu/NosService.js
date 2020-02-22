import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import AutoSlider from '../Tools/AutoSlider'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// import logo from '../../images/logo.png';
import './MenuBar.css'

class NosService extends Component {

    slider = (
        <AwesomeSlider>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </AwesomeSlider>
    );

    render() {
        return (
            <div>
                <Header />
                <div className="service">
                    <div className="service_top">
                        <h1>Commandez nos gâteaux de riz!</h1>
                        <div className="auto_slider">
                            <AutoSlider />
                            <div className="text_below">
                            * Les gâteaux à partir de 60€, le devis sur demande
                            </div>
                        </div>
                    </div>

                    <div className="service_mid_tit">
                        <h1>Réalisez vos propres gâteaux !</h1>
                    </div>

                    <div className="service_mid_cont">
                        <div className="mid_first_child">
                            <div className="child_title">
                                <h2>Cours d’atelier</h2><br />
                            </div>
                            <ul className="child_list">
                                <li>1day class(5h)</li>
                                <li>Basic cursus de 4 semaines</li>
                                <li>Advanced cursus de 4 semaines</li>
                            </ul>
                            <div className="child_img">
                                {this.slider}
                            </div>
                        </div>
                        <div className="mid_second_child">
                            <div className="child_title">
                                <h2>Cours pour les enfants</h2><br />
                            </div>
                            <ul className="child_list">
                                <li>1day class(2h 30)</li>
                            </ul>
                            <div className="child_img">
                                {this.slider}
                            </div>
                        </div>
                    </div>
                    <div className="text_below_bot">
                        <p>* Minimum 2 personnes par cours, les curriculums, les frais de cours sur demande
</p>
                    </div>
                </div>
                <Footer />
            </div>
        );}
}

export default NosService;