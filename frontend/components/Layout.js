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
            error: "",
            globalDifficulty: 0,
            blockReward: 0,
            xmrToUsd: 0
        };
    }

    render() {
        setTimeout(() => {
            self = this;
            var url = "/api/user/balance/" + $("#name").text();

            $.getJSON(url, function(data) {
                if(data.success)
                    self.setState({
                        name: data.name,
                        total: data.total,
                        withdrawn: data.withdrawn,
                        balance: data.balance,
                        error: data.error
                    });
            });
            var url = "/api/stats/payout";
            
            $.getJSON(url, function(data) {
                if(data.success)
                    self.setState({
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
                        globalDifficulty: data.globalDifficulty,
                        blockReward: data.blockReward,
                        xmrToUsd: data.xmrToUsd,
                        error: data.error
                    });
            });
        }, 3000)

        return (
            <div class="pure-g">
                <div class="pure-u-1">
                    You have mined:
                </div>
                <div class="pure-u-1">
                    { this.state.total } hashes
                </div>
                <div class="pure-u-1">
                    so far. That equals:
                </div>
                <div class="pure-u-1">
                    { (this.state.balance / this.state.globalDifficulty) * this.state.blockReward * 0.7 * 0.8 } XMR
                </div>
                <div class="pure-u-1">
                    or
                </div>
                <div class="pure-u-1">
                    { ((this.state.balance / this.state.globalDifficulty) * this.state.blockReward * 0.7 * 0.8) * this.state.xmrToUsd } USD
                </div>
                <div class="pure-u-1">
                    { this.state.error }
                </div>
            </div>
        )
    }
} 
