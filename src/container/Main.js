import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Main extends Component {
    constructor(props) {
        super (props);

        const query = new URLSearchParams(props.location.search);
        const page = query.get('page');

        this.state = {
            page : page || 'arc',
            articleList:[]
        };
    }

    componentDidMount() {
        this._getList();
    }

    componentDidUpdate(prevProps) {
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevPage = prevQuery.get('page');

        let query = new URLSearchParams(this.props.location.search);
        let page = query.get('page');

        if (prevPage !== page) {
            this.setState({
                page
            })
        };
    }

    _getList() {
        const apiUrl = './data/Article.json';

        axios.get(apiUrl)
            .then(data=>{
                this.setState({
                    articleList : data.data.articleList
                });
            })
            .catch(error=> {
                console.log(error);
            });
    }
        
    render() {
        return (
            <div>
                <Header />
                {/* <MenuPage page={this.state.page} /> */}
                <Footer />
            </div>   
        );
    }
}

export default Main;