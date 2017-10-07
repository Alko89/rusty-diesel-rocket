import React from 'react';
import $ from 'jquery';

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "Alko" };
    }

    render() {
        setTimeout(() => {
            self = this;

            $.getJSON("http://0.0.0.0:8001/api/test", function(data) {
                console.log(data.name);
                self.setState({ name: data.name });
              });

            //this.setState({name: "Bravo"})


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
