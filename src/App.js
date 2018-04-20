import React from 'react';
import axios from 'axios';

import { MyFa } from './MyFa';
import { Widget } from './Widget';
import { Crypto } from './Crypto';

import './App.css';


class App extends React.Component {

    state = {
        coins: []
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=77')
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })
    }

    render() {
        return (
            <ul className="card-deck">
                { this.state.coins.map(coin =>
                    <li className={"card bg-" + coin.id}>
                        <span className="h2">#{coin.rank} {coin.name}</span>
                        <span className="h3">{coin.symbol}</span>
                        <span className="h5">
                            Percent change, past 7 days: 
                            <span className="h4">{coin.percent_change_7d}</span>
                        </span>
                    </li>
                )}
            </ul>
        );
    }
}

export default App;
