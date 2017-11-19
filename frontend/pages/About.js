import React from 'react';

export default class About extends React.Component {
    render() {
        const rocketBackgroundStyle = {
            backgroundColor: "#d33847"
        };

        return (
            <div id="main">
                <div className="header">
                    <h1>About</h1>
                </div>

                <div className="content">
                <h2 className="content-subhead">Official repo</h2>
                <p>
                <a href="https://github.com/Alko89/xmr_webminer">https://github.com/Alko89/xmr_webminer</a>
                </p>

                <h2 className="content-subhead">Thanks to</h2>
                <p>
                <a href="https://github.com/belst/rusty-diesel-rocket">https://github.com/belst/rusty-diesel-rocket</a>
                </p>

                <h2 className="content-subhead">Technologies used</h2>
                <div className="pure-g">
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://www.rust-lang.org/logos/rust-logo-blk.svg" alt="Rust"/>
                    </div>
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://camo.githubusercontent.com/69d97ac8a4dbf2dbb46ad66eda5b8cc6dc170eb7/687474703a2f2f64696573656c2e72732f6173736574732f696d616765732f64696573656c5f6c6f676f5f737461636b65645f626c61636b2e706e67" alt="Diesel.rs"/>
                    </div>
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://rocket.rs/images/logo.svg" alt="Rocket.rs" style={rocketBackgroundStyle} />
                    </div>
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React.js"/>
                    </div>
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" alt="Redux.js"/>
                    </div>
                    <div className="pure-u-1-6">
                        <img className="pure-img-responsive" src="https://purecss.io/img/logo_pure@2x.png" alt="Pure.css"/>
                    </div>
                </div>

                <h2 className="content-subhead">GoOpen</h2>
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <img className="pure-img-responsive" src="/images/GoOpen.png" alt="GoOpen"/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
} 
