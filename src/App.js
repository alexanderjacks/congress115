import React from 'react';
import axios from 'axios';

import { Crypto } from './Crypto';

import './App.css';


class App extends React.Component {

    constructor(props) {   
        super(props)
        this.state = { coins: [] }
        this.sortByRankDesc = this.sortByRankDesc.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByChangeHour = this.sortByChangeHour.bind(this);
        this.sortByChangeDay = this.sortByChangeDay.bind(this);
        this.sortByChangeWeek = this.sortByChangeWeek.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=99')
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })
    }

    sortByRankDesc() {
        this.setState(prevState => {
            this.state.coins.sort((a,b) => (a.rank - b.rank))
        });
        console.log("Sort Rank Desc");
    }
    sortByPriceAsc() {
        this.setState(prevState => {
            this.state.coins.sort((a,b) => (a.price_usd - b.price_usd))
        });
        console.log("Sort USD Asc");
    }
    sortByChangeHour() {
        this.setState(prevState => {
            this.state.coins.sort((a,b) => (b.percent_change_1h - a.percent_change_1h))
        });
        console.log("Sort Change Hour");
    }
    sortByChangeDay() {
        this.setState(prevState => {
            this.state.coins.sort((a,b) => (b.percent_change_24h - a.percent_change_24h))
        });
        console.log("Sort Change Day");
    }
    sortByChangeWeek() {
        this.setState(prevState => {
            this.state.coins.sort((a,b) => (b.percent_change_7d - a.percent_change_7d))
        });
        console.log("Sort Change Week");
    }

    render() {
        return (
        <div className="">
            <div className="header-shading p-3 text-center">

                <h1 className="display-5">Top 99 Crypto Currencies</h1>
                <h2 className="display-6">Updated every 5 minutes <a href="https://coinmarketcap.com/all/views/all/">via</a></h2>
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


                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="nav-link" href="#Market_Cap_Descending" onClick={this.sortByRankDesc}>
                        <i className="fas fa-sort-amount-up"></i>
                        <i className="fas fa-sync fa-spin"></i>
                        <span> Market Cap</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Price_Ascending" onClick={this.sortByPriceAsc}>
                        <i className="fas fa-sort-amount-down fa-flip-vertical"></i>
                        <i className="fas fa-dollar-sign"></i>
                        <span> Lowest Price USD</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#One_Hour_Change_Descending" onClick={this.sortByChangeHour}>
                        <i className="fas fa-sort-amount-up"></i>
                        <i className="far fa-clock"></i>
                        <span> 1hr Most Change</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#24-Hour_Change_Descending" onClick={this.sortByChangeDay}>
                        <i className="fas fa-sort-amount-up"></i>
                        <i className="fas fa-sun"></i>
                         <span> 24hr Most Change</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Week_Change_Descending" onClick={this.sortByChangeWeek}>
                        <i className="fas fa-sort-amount-up"></i>
                        <i className="fas fa-calendar-alt"></i>
                        <span> Weekly Most Change</span>
                    </a>
                    </li>
                </ul>





            </div>



{/* iterate thru the array list gathered from the API*/}
            <div className="card-deck justify-content-around">
                { this.state.coins.map(coin =>
                    <a href={"https://coinmarketcap.com/currencies/" + coin.id}>

                    <div className={"media-shift card m-4 container-fluid card-bg-img bg-" + coin.id}>
                        
                        {/* title zone */}
                        <div className="mt-2 card-header align-items-center justify-content-around">
                            <span className="h3">#{coin.rank} </span>

                            <img className="sm-icon" src={"./images/"+coin.id+".png"} />
                            <span className="h3"> {coin.name} </span>
                            <span className="h3">({coin.symbol})</span>
                        </div>

                        
                        {/* metadata zone */}
                        <span className="text-center h4 price">
                            Value in USD $ 
                            <span className="h3">{coin.price_usd}</span>
                        </span>

                        <div className="list-group flex-column">
                            <div className="list-group-item d-flex justify-content-between align-items-center hourly">
                                <i className="far fa-clock"></i>
                                <span> Hourly:</span>
                                <h5> {coin.percent_change_1h}%</h5>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center daily">
                                <i className="fas fa-sun"></i>
                                <span> Daily:</span>
                                <h5> {coin.percent_change_24h}%</h5>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center weekly">
                                <i className="fas fa-calendar-alt"></i>
                                <span> Weekly:</span>
                                <h4> {coin.percent_change_7d}%</h4>
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
