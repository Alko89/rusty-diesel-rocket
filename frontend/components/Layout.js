import React from 'react';
import $ from 'jquery';

// import Header from "./Header";
// import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            total: 0,
            withdrawn: 0,
            balance: 0,
            error: ""
        };
    }

    render() {
        setTimeout(() => {
            self = this;

            $.getJSON("http://0.0.0.0:8001/api/test", function(data) {
                if(data.success)
                    self.setState({
                        name: data.name,
                        total: data.total,
                        withdrawn: data.withdrawn,
                        balance: data.balance,
                        error: data.error
                    });
            });
        }, 3000)

        return (
            <div class="pure-g">
                <div class="pure-u-1">
                    { this.state.name }
                </div>
                <div class="pure-u-1">
                    { this.state.total }
                </div>
                <div class="pure-u-1">
                    { this.state.withdrawn }
                </div>
                <div class="pure-u-1">
                    { this.state.balance }
                </div>
                <div class="pure-u-1">
                    { this.state.error }
                </div>
            </div>
        )
    }
} 
