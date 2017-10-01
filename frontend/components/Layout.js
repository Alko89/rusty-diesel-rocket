import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "Alko" };
    }

    render() {
        setTimeout(() => {
            this.setState({name: "Bravo"})
        }, 3000)
        
        return (
            <div>
                <Header />
                { this.state.name }
                <Footer />
            </div>
        )
    }
} 
