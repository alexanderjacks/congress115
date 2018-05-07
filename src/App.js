import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import './App.css';

class App extends React.Component {

    constructor(props) {   
        super(props)
        this.state = {
            coins: [],
            NowTS: Date.now(),
            FortnightlyBeforeNow: Date.now()-1382434
        }
        this.sortByRankDesc = this.sortByRankDesc.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByChangeHour = this.sortByChangeHour.bind(this);
        this.sortByChangeDay = this.sortByChangeDay.bind(this);
        this.sortByChangeWeek = this.sortByChangeWeek.bind(this);
    }

    componentDidMount() {
        
        console.log("Now TS: "+ this.state.NowTS);
        console.log("2 weeks ago TS: "+ this.state.FortnightlyBeforeNow);
        
        Promise.all([
            axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=200')
            ])
            .then(([ response ]) => {
                this.setState({ coins: response.data });

                console.log(this.state.coins);
            });

        const fortnight_element = <h5>fortnite test</h5>;
        ReactDOM.render(fortnight_element, document.getElementById('fortnight'));

        var NumberFormat = require('react-number-format');
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
        const { coins, FortnightlyBeforeNow } = this.state
        return (
        <div className="">
            <div className="header-shading p-3 text-left" id="top">

                <h1 className="pt-5">Top 200 Crypto Currencies</h1>
                <h3 className="">Updated every 5 minutes <a href="https://coinmarketcap.com/all/views/all/">via coinmarketcap.com</a></h3>
                <h6>
                    Created for educational purposes only by <a href="https://github.com/Adjectival">Alexander Jacks</a>.
                </h6>
                <h6>
                    Not intended as a replacement for professional investment advice.
                </h6>
                <h5>
                    Upcoming coins may not have proper images yet-- helps flag them as climbers! 
                </h5>
                <h4>
                    Want a crypto guide?
                    <a href="https://how-to-crypto.herokuapp.com/"> Check this out.</a>
                </h4>
                <h6 className="donate">
                    
                    <span> Donate ETH <i className="fab fa-ethereum"></i>: 0xb93310db3ad5900494438cc1a5ae5300e86f7023</span>
                </h6>
                <h6 className="donate">
                    <span> Donate BTC <i className="fab fa-bitcoin"></i>: 12YpKeoQ7VToosj9MoQpcM6srAbnxs42gq</span>
                </h6>


                <div className="btn-group fixed-top justify-content-center" role="group" aria-label="Navigation button group with dropdown">

                    <button type="button" className="btn-lg">
                    <a href="#top" className="arrow-btn top-btn">
                        <i className="fas fa-arrow-up"></i>
                        <span> Top of List</span>
                    </a>
                    </button>

                    <div className="btn-group" role="group">
                        <button id="btnGroupDropdown" type="button" className="btn-lg btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filters
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropdown">
                            <a href="#Market_Cap_Descending" className="dropdown-item" onClick={this.sortByRankDesc}>
                                <i className="fas fa-sort-amount-up"></i>
                                <i className="fas fa-sync"></i>
                                <span> Market Cap</span>
                            </a>
                            <a href="#Price_Ascending" className="dropdown-item" onClick={this.sortByPriceAsc}>
                                <i className="fas fa-sort-amount-down fa-flip-vertical flip-vertical-fix"></i>
                                <i className="fas fa-dollar-sign"></i>
                                <span> Lowest Price</span>
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
                    </div>

                    <button type="button" className="btn-lg">
                    <a href="#bottom" className="bottom-btn arrow-btn">
                        <i className="fas fa-arrow-down"></i>
                        <span> Bottom of List</span>
                    </a>
                    </button>

                </div>





            </div>



{/* iterate thru the array list gathered from the API*/}
            <div className="card-deck justify-content-around">
                { coins.map(coin =>
                    <a href={"https://coinmarketcap.com/currencies/" + coin.id}>


                    {/* each card */}
                    <div className={"media-shift card card-shadow m-4 container-fluid card-bg-img bg-" + coin.id}>
                        {/* title zone */}
                        <div className="mt-2 card-header align-items-center justify-content-around">
                            <span className="h3">#{coin.rank} </span>

                            <img className="sm-icon" src={"./images/" + coin.id + ".png"} />
                            <span className="h2"> {coin.name} </span>
                            <span className="h3">({coin.symbol})</span>
                            <span className="text-right mb-0 d-block">
                                MktCapUSD: 
                                <NumberFormat 
                                value={coin.market_cap_usd} 
                                displayType={'text'} 
                                thousandSeparator={true} 
                                decimalSeparator={false} 
                                prefix={'$'} />
                            </span>
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
                    {/* end card */}
                    </a>
                )}
            </div>
            {/* end iteration */}
        <span id="bottom"></span>
        </div>
        );
    }
}

export default App;
