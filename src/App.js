import React from 'react';
import axios from 'axios';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import './App.css';


class App extends React.Component {

    constructor(props) {   
        super(props)
        this.state = {
            coins: []
        }
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
            });
        axios.get()
            .then(res => {
                const history = res.data;
                this.setState({ history });
            });
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
            <div className="header-shading p-3 text-left" id="top">

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


                <ul className="nav nav-pills fixed-top justify-content-center">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle btn" data-toggle="dropdown" href="#!" role="button" aria-haspopup="true" aria-expanded="false">Filters</a>
                        <div className="dropdown-menu dropdown-menu-right">
                        
                        <a href="#top" className="dropdown-item">
                            <i className="fas fa-arrow-up"></i>
                            <span> Return to Top</span>
                        </a>

                        <a href="#Market_Cap_Descending" className="dropdown-item" onClick={this.sortByRankDesc}>
                            <i className="fas fa-sort-amount-up"></i>
                            <i className="fas fa-sync fa-spin"></i>
                            <span> Market Cap</span>
                        </a>
                        <a href="#Price_Ascending" className="dropdown-item" onClick={this.sortByPriceAsc}>
                            <i className="fas fa-sort-amount-down fa-flip-vertical"></i>
                            <i className="fas fa-dollar-sign"></i>
                            <span> Lowest Price USD</span>
                        </a>
                        <a href="#One_Hour_Change_Descending" className="dropdown-item" onClick={this.sortByChangeHour}>
                            <i className="fas fa-sort-amount-up"></i>
                            <i className="far fa-clock"></i>
                            <span> 1hr Change</span>
                        </a>
                        <a href="#24-Hour_Change_Descending" className="dropdown-item" onClick={this.sortByChangeDay}>
                            <i className="fas fa-sort-amount-up"></i>
                            <i className="fas fa-sun"></i>
                             <span> 24hr Change</span>
                        </a>
                        <a href="#Week_Change_Descending" className="dropdown-item" onClick={this.sortByChangeWeek}>
                            <i className="fas fa-sort-amount-up"></i>
                            <i className="fas fa-calendar-alt"></i>
                            <span> Weekly Change</span>
                        </a>

                        </div>
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
                            <div className="list-group-item d-flex flex-row justify-content-between align-items-center hourly">
                                <span className="">
                                    <i className="pr-2 far fa-clock"></i>
                                     Hourly:
                                </span>
                                <h5> {coin.percent_change_1h}%</h5>
                            </div>
                            <div className="list-group-item d-flex flex-row justify-content-between align-items-center daily">
                                <span className="" >
                                    <i className="pr-2 fas fa-sun"></i>
                                     Daily:
                                </span>
                                <h5> {coin.percent_change_24h}%</h5>
                            </div>
                            <div className="list-group-item d-flex flex-row justify-content-between align-items-center weekly">
                                <span className="">
                                    <i className="pr-2 fas fa-calendar-alt"></i>
                                     Weekly:
                                </span>
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
