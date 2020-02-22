import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import Header from '../Header';
import Footer from '../Footer';

import titleimg from '../../images/nos_gateaux_photo.jpg';
import cake1 from '../../images/cake1.JPG';
import cake2 from '../../images/cake2.JPG';
import cake3 from '../../images/cake3.JPG';
// import logo from '../../images/logo.png';

import './MenuBar.css'

class NosGateaux extends Component {
    slider = (
        <AwesomeSlider>
            <div><img src={titleimg} alt="mainimg"/></div>
            <div>2</div>
        </AwesomeSlider>
    );

    miniSlider = (
        <AwesomeSlider>
            <div><img src={cake1} alt="cakeimg"/></div>
            <div><img src={cake2} alt="mainimg"/></div>
            <div><img src={cake3} alt="mainimg"/></div>
        </AwesomeSlider>
    )
    render () {
        return (
            <div>
                <Header />
                <div className="gat_content">
                    <div className="gat_upperCont">
                        <h1>
                        Qu’est ce que c’est, GATEAUX DE RIZ?
                        </h1>
                        <div className="slider">
                            {this.slider}
                        </div>
                        <p>
                        Le gâteau de riz s’appelle Tteok en coréen.<br/>
Tteok est une pâtisserie coréenne faite de farine de riz, cuit à la vapeur.<br/>
Les nombreuses versions vont du tteok aux noix et aux fruits au tteok courant utilisé en cuisine.<br/>
                        </p>
                    </div>
                    <div className="gat_midcont">
                        <h1>
                        Qu’est ce qui rend nos gâteaux de riz spéciaux?
                        </h1>
                        <div className="mid_article">
                            <div className="mid_first">
                                <h3>Esthéitque</h3>
                                <p>
                                Le design de gâteaux comme un bouquet avec les fleurs faites de la pâte de haricot.
                                </p>
                                <div className="mid_slider">
                                    {this.miniSlider}
                                </div>
                            </div>
                            <div className="mid_second">
                                <h3>Diététique</h3>
                                <p>
                                Sans gluten, sans beurre, sans oeuf => vegan
                                </p>
                                <div className="mid_slider">
                                    {this.miniSlider}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NosGateaux;