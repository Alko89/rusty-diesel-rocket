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
                    <div className="pure-u-1-4">
                        <img className="pure-img-responsive" src="https://www.rust-lang.org/logos/rust-logo-blk.svg" alt="Rust"/>
                    </div>
                    <div className="pure-u-1-4">
                        <img className="pure-img-responsive" src="https://rocket.rs/images/logo.svg" alt="Rocket" style={rocketBackgroundStyle} />
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
