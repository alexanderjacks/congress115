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
            <ul>
                { this.state.coins.map(coin =>
                    <li>{coin.name}</li>)
                }
            </ul>
        );
    }
}

export default App;
