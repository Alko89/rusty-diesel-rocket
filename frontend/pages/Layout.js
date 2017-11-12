import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';


export default class Layout extends React.Component {

    render() {
        return (
            <div id="layout">
                {/* Menu toggle */}
                <a href="#menu" id="menuLink" className="menu-link">
                    {/* Hamburger icon */}
                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <Link to="#" className="pure-menu-heading">XMR Miner</Link>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Home</Link></li>
                            <li className="pure-menu-item pure-menu-selected"><Link to="about" className="pure-menu-link">About</Link></li>
                            <li className="pure-menu-item"><Link to="settings" className="pure-menu-link">Settings</Link></li>
                            <li className="pure-menu-item"><Link to="user" className="pure-menu-link">User</Link></li>

                            <li className="pure-menu-item menu-item-divided"><a href="/login" className="pure-menu-link">Login</a></li>
                            <li className="pure-menu-item"><a href="/register" className="pure-menu-link">Register</a></li>
                        </ul>
                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
} 
