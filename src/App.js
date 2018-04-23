import React from 'react';
import axios from 'axios';

import { Crypto } from './Crypto';

import './App.css';


class App extends React.Component {

    state = {
        coins: []
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=99')
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })
    }

    render() {
        return (
        <div>
            <div className="">
            <div className="header-shading p-3">
                <h1 className="display-5">Top 99 Crypto Currencies</h1>
                <h6>
                    Created for educational purposes only by <a href="https://github.com/Adjectival">Alexander Jacks</a>.
                </h6>
                <h6>
                    Not intended as a replacement for professional investment advice.
                </h6>
                <h4>
                    Want a crypto guide?
                    <a href="https://how-to-crypto.herokuapp.com/"> Check this out.</a>
                </h4>
                <h6 className="donate">
                    Donate ETH: 0xd74cb5c0e868B06DaEA6Bb25364dCF1f2C096855
                </h6>
            </div>
            </div>



{/* iterate thru the array list gathered from the API*/}
            <div className="card-deck">
                { this.state.coins.map(coin =>
                    <a href={"https://coinmarketcap.com/currencies/" + coin.id}>
                    <div className="card-frame m-2 d-sm-flex">
                    <div className={"card container-fluid card-bg-img bg-" + coin.id}>
                        
                        {/* title zone */}
                        <div className="mt-2 card-header align-items-center justify-content-around">
                            <span className="h3">#{coin.rank} </span>

                            <img className="sm-icon" src={"./images/"+coin.id+".png"} />
                            <span className="h3"> {coin.name} </span>
                            <span className="h3">({coin.symbol})</span>
                        </div>

                        
                        {/* metadata zone */}
                        <span className="text-center h3 price">
                            Value in USD $ 
                            <span className="h2">{coin.price_usd}</span>
                        </span>

                        <div className="list-group flex-column">
                            <div className="list-group-item justify-content-around hourly">
                                <span>Hourly Change:</span>
                                <span className="h5"> {coin.percent_change_1h}%</span>
                            </div>
                            <div className="list-group-item justify-content-around daily">
                                <span>Daily Change:</span>
                                <span className="h5"> {coin.percent_change_24h}%</span>
                            </div>
                            <div className="list-group-item justify-content-around weekly">
                                <span>Weekly Change:</span>
                                <span className="h4"> {coin.percent_change_7d}%</span>
                            </div>
                        </div>

                    </div>
                    </div>
                    </a>
                )}
            </div>
            {/* end iteration */}

        </div>
        );
    }
}

export default App;
