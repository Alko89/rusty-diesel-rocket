import React from 'react';
import { connect } from "react-redux";

import { fetchUser } from "../actions/UserActions"

@connect((store) => {
    return {
        user: store.user.user,
        user_fetched: store.user.fetched
    };
})

export default class CoinhiveUser extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchUser() {
        this.props.dispatch(fetchUser())
    }

    render() {
        const { user } = this.props;

        return (
            <div id="main">
                <div className="header">
                    <h1>Rocket Session</h1>
                    <h2>Logged in as { user.name }.</h2>
                </div>
                <div className="content">
                <div className="pure-g">
                    <div className="pure-u-1">
                        You have mined:
                    </div>
                    <div className="pure-u-1">
                        { user.total } hashes
                    </div>
                    <div className="pure-u-1">
                        so far. That equals:
                    </div>
                    <div className="pure-u-1">
                        { (user.balance / user.globalDifficulty) * user.blockReward * 0.7 * 0.8 } XMR
                    </div>
                    <div className="pure-u-1">
                        or
                    </div>
                    <div className="pure-u-1">
                        { ((user.balance / user.globalDifficulty) * user.blockReward * 0.7 * 0.8) * user.xmrToUsd } USD
                    </div>
                    <div className="pure-u-1">
                        { user.error }
                    </div>
                </div>
                {/* <div className="pure-u-1 pure-u-sm-1-2">
                    <div className="coinhive-miner"
                            data-key="LizXPgR1RicCNg50MGh2EOgT4BjJovK0"
                            data-user={ user.name }
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
