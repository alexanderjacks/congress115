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
        this.sortByID = this.sortByID.bind(this);
        this.sortByPlace = this.sortByPlace.bind(this);
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

    sortByID() {
        this.setState(prevState => {
            this.state.congresspersons.sort((a,b) => (a.ID - b.ID))
        });
        console.log("Sort Rank Desc");
    }
    sortByPlace() {
        this.setState(prevState => {
            this.state.congresspersons.sort((a,b) => (a.State - b.State))
        });
        console.log("Sort by States, descending");
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
                <h2>
                    Remember to <strong>V O T E</strong>
                </h2>
                
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
                        <button id="btnGroupDropdown" type="button" className="btn-lg btn-secondary dropdown-toggle" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filters
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropdown">
                            <a href="#Market_Cap_Descending" className="dropdown-item" onClick={this.sortByID}>
                                <i className="fas fa-sort-amount-up"></i>
                                <i className="fas fa-sync"></i>
                                <span> Bioguide IDs</span>
                            </a>
                            <a href="#Price_Ascending" className="dropdown-item" onClick={this.sortByPlace}>
                                <i className="fas fa-sort-amount-down fa-flip-vertical flip-vertical-fix"></i>
                                <i className="fas fa-dollar-sign"></i>
                                <span> States</span>
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
                            <div className={"card col-12 col-sm-6 d-flex flex-row justify-content-between align-items-center office-icon-" + congressperson.Office}>
                                <div className={"card my-5 mx-1 align-items-center justify-content-around pl-2 colors-" + congressperson.Party}>
                                    <h3 className="mt-5">{congressperson.Name}</h3>
                                    <h4>{congressperson.Party} {congressperson.Office}</h4>
                                    <h4>{congressperson.State} ({congressperson.Abbr})</h4>
                                    <svg className={congressperson.Abbr + "-img StaTerritory"}></svg>
                                </div>
                                <div className={"pic-frame card p-2"}>
                                    <div className="biopic" id={"biopic-" + congressperson.ID}></div>
                                    <a href={congressperson.URL}>
                                        <h6 className="mt-2">Visit homepage of Congress member #{congressperson.ID}</h6>
                                    </a>
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
