import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div id="main">
                <div className="header">
                    <h1>About</h1>
                </div>

                <div className="content">
                <h2 className="content-subhead">Technologies used</h2>
                <div className="pure-g">
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="https://www.rust-lang.org/logos/rust-logo-blk.svg" alt="Rust"/>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="https://mmstick.tk/images/logo/rocket.png" alt="Rocket"/>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React"/>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="https://purecss.io/img/logo_pure@2x.png" alt="Pure"/>
                </div>
            </div>
                </div>
            </div>
        )
    }
} 
