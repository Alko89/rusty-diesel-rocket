import React from 'react';
import { connect } from "react-redux";
import CoinHive from 'react-coin-hive';

import Menu from '../components/Menu';

import { fetchUser } from "../actions/UserActions";

@connect((store) => {
    return {
        user: store.user.user,
        user_fetched: store.user.fetched
    };
})

export default class Layout extends React.Component {
    state = {
        threads: navigator.hardwareConcurrency
    }
    
    addThread = () => {
        this.setState({ threads: this.state.threads + 1 })
    }
    
    removeThread = () => {
        this.setState({ threads: this.state.threads - 1 })

        this._child.stop()
    }

    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchUser() {
        this.props.dispatch(fetchUser())
    }

    render() {
        const { location } = this.props;

        const gitHubImgStyle = {
            position: "absolute",
            top: 0,
            right: 0,
            border: 0
        };

        return (
            <div id="layout">
                <a href="https://github.com/Alko89/xmr_webminer">
                    <img style={gitHubImgStyle} src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" />
                </a>

                {/* Menu toggle */}
                <a href="#menu" id="menuLink" className="menu-link">
                    {/* Hamburger icon */}
                    <span></span>
                </a>

                <Menu location={location} />

                {this.props.children}


                <div className="header">
                    <h2>Threads: {this.state.threads}</h2>
                </div>
                <div>
                    <input
                    type="button"
                    value="add"
                    onClick={this.addThread}
                    />
                    <input
                    type="button"
                    value="remove"
                    onClick={this.removeThread}
                    />
                </div>
                <CoinHive siteKey='LizXPgR1RicCNg50MGh2EOgT4BjJovK0'
                    threads={this.state.threads}
                    userName='{ user.name }'
                    ref={(child) => { this._child = child; }}
                />
            </div>
        )
    }
} 
