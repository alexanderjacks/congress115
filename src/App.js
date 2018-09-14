import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './App.css';

export default class App extends React.Component {

    constructor(props) {   
        super(props)
        this.state = {
            congresspersons: [],
            NowTS: Date.now()
        }
        this.sortByRankDesc = this.sortByRankDesc.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    }

    componentDidMount() {
        
        console.log("Now TS: "+ this.state.NowTS);

        Promise.all([
            axios.get('https://raw.githubusercontent.com/alexanderjacks/congress115/master/115congress.json')
            ])
            .then(([ response ]) => {
                this.setState({ congresspersons: response.data });

                console.log(this.state.congresspersons);
            });
    }

    sortByRankDesc() {
        this.setState(prevState => {
            this.state.congresspersons.sort((a,b) => (a.rank - b.rank))
        });
        console.log("Sort Rank Desc");
    }
    sortByPriceAsc() {
        this.setState(prevState => {
            this.state.congresspersons.sort((a,b) => (a.price_usd - b.price_usd))
        });
        console.log("Sort USD Asc");
    }

    render() {
        const { congresspersons } = this.state
        return (
        <div className="">
            <div className="header-shading p-3 text-left" id="top">

                <h1 className="pt-5">115th US Congress</h1>

                <h3 className="">From this public resource: <a href="https://www.congress.gov/">congress.gov</a></h3>
                <h6>
                    Created for educational purposes only by <a href="https://github.com/alexanderjacks">Alexander Jacks</a>.
                </h6>
                <h6>
                    Remember to <strong>V O T E</strong>
                </h6>
                
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
                        <span> Top</span>
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
                        </div>
                    </div>

                    <button type="button" className="btn-lg">
                    <a href="#bottom" className="bottom-btn arrow-btn">
                        <i className="fas fa-arrow-down"></i>
                        <span> Bottom</span>
                    </a>
                    </button>

                </div>





            </div>



{/* iterate thru the array list gathered from the API, create item for each array member*/}
            <div className="">

                { congresspersons.map(congressperson =>
                    
                    <div className={"container-fluid my-0 justify-content-between"}>

                        <div className="d-flex row semi-opaque justify-content-around align-items-center">
                            
                        {/* extra layout column, reactive UI for mobile  */}
                            <div className="col-12 col-sm-6 d-flex flex-row justify-content-between align-items-center">
                                <div className={"sm-icon office-icon-" + congressperson.Office}></div>
                                <div className="align-items-center justify-content-around pl-2">
                                    <h3>{congressperson.Name} </h3>
                                    <h4>{congressperson.Party} {congressperson.Office} </h4>
                                    <h4>{congressperson.State}</h4>
                                    <h4>{congressperson.Abbr}</h4>
                                </div>
                                <div className={"pic-frame p-2"}>
                                    <div className="biopic" id={"biopic-" + congressperson.ID}></div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
                ) }

            </div>
            {/* end iteration */}
        <span id="bottom"></span>
        </div>
        );
    }
}
