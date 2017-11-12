import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div id="main">
                <div className="header">
                    <h1>Rocket Session</h1>
                    <h2>Anonymous mining!</h2>
                </div>

                <div className="content">
                <h2 className="content-subhead">Web mining for everyone!</h2>
                <p>
                    Want to start earning money with mining, but don't know how to start?
                </p>
                <p>
                    You can start learning about mining, while mining right here! If you check your Task Manager, you will notice, you are allready mining! WOW!
                </p>

                <h2 className="content-subhead">What is mining?</h2>
                <p>
                    <a href="https://coinmarketcap.com/currencies/monero/">Monero (XMR)</a> is a cryptocurrency that utilizes Cryptonight algorythm for mining. Cryptonight is a proof-of-work algorithm. It is designed to be suitable for ordinary PC CPUs, but currently no special purpose devices for mining are available. Therefore, Cryptonight can only be CPU-mined for the time being.
                </p>

                <div className="pure-g">
                    <div className="pure-u-1">
                        <img className="pure-img-responsive" src="https://getmonero.org/img/monero-logo.png" alt="Monero Logo"/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
} 
