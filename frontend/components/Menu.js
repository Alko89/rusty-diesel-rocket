import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "pure-menu-item pure-menu-selected" : "pure-menu-item";
        const aboutClass = location.pathname.match(/^\/about/) ? "pure-menu-item pure-menu-selected" : "pure-menu-item";
        const settingsClass = location.pathname.match(/^\/settings/) ? "pure-menu-item pure-menu-selected" : "pure-menu-item";
        const userClass = location.pathname.match(/^\/user/) ? "pure-menu-item pure-menu-selected" : "pure-menu-item";

        return (
            <div id="menu">
            <div className="pure-menu">
                <Link to="#" className="pure-menu-heading">XMR Miner</Link>

                <ul className="pure-menu-list">
                    <li className={homeClass}><Link to="#" className="pure-menu-link">Home</Link></li>
                    <li className={aboutClass}><Link to="about" className="pure-menu-link">About</Link></li>
                    <li className={settingsClass}><Link to="settings" className="pure-menu-link">Settings</Link></li>
                    <li className={userClass}><Link to="user" className="pure-menu-link">User</Link></li>

                    <li className="pure-menu-item menu-item-divided"><a href="/login" className="pure-menu-link">Login</a></li>
                    <li className="pure-menu-item"><a href="/register" className="pure-menu-link">Register</a></li>
                </ul>
            </div>
            </div>
        )
    }
} 
