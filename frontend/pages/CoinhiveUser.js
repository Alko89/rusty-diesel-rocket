import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class CoinhiveUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            total: 0,
            withdrawn: 0,
            balance: 0,
            error: "",
            globalDifficulty: 0,
            blockReward: 0,
            xmrToUsd: 0
        };
    }

    render() {
        setTimeout(() => {
            self = this;
            var url = "/api/user";

            $.getJSON(url, function(data) {
                if(data.user)
                    self.setState({
                        name: data.user,
                        total: data.payout.total,
                        withdrawn: data.payout.withdrawn,
                        balance: data.payout.balance,
                        error: data.payout.error,
                        /*
                        success": true|false,
                        "globalDifficulty": number,
                        "globalHashrate": number,
                        "blockReward": number,
                        "payoutPercentage": number,
                        "payoutPer1MHashes": number,
                        "xmrToUsd": number,
                        "updated": number,
                        "error": string
                        
                        */
                        globalDifficulty: data.balance.globalDifficulty,
                        blockReward: data.balance.blockReward,
                        xmrToUsd: data.balance.xmrToUsd,
                        error: data.balance.error
                    });
                else
                {
                    console.log("Error");
                }
            });
        }, 3000)

        return (
            <div id="main">
                <div className="header">
                    <h1>Rocket Session</h1>
                    <h2>Logged in as { this.state.name }.</h2>
                </div>
                <div className="content">
                <div className="pure-g">
                    <div className="pure-u-1">
                        You have mined:
                    </div>
                    <div className="pure-u-1">
                        { this.state.total } hashes
                    </div>
                    <div className="pure-u-1">
                        so far. That equals:
                    </div>
                    <div className="pure-u-1">
                        { (this.state.balance / this.state.globalDifficulty) * this.state.blockReward * 0.7 * 0.8 } XMR
                    </div>
                    <div className="pure-u-1">
                        or
                    </div>
                    <div className="pure-u-1">
                        { ((this.state.balance / this.state.globalDifficulty) * this.state.blockReward * 0.7 * 0.8) * this.state.xmrToUsd } USD
                    </div>
                    <div className="pure-u-1">
                        { this.state.error }
                    </div>
                </div>
                {/* <div className="pure-u-1 pure-u-sm-1-2">
                    <div className="coinhive-miner"
                            data-key="LizXPgR1RicCNg50MGh2EOgT4BjJovK0"
                            data-user={ this.state.name }
                            data-autostart="true" >
                        <em>Please disable Adblock!</em>
                    </div>
                </div> */}
                <div className="pure-u-1">
                        <form className="pure-form" action="/logout" method="post" acceptCharset="utf-8">
                                <input className="pure-button" type="submit" name="logout" id="logout" value="logout" />
                        </form>
                </div>
                </div>
            </div>
        )
    }
} 
