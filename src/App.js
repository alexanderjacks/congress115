import React from 'react';
import axios from 'axios';

// import CheckboxContainer from './CheckboxContainer';

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
        <div className="container-fluid m-0 p-0">
            <div className="row header-shading pt-4 pl-4" id="top">
                <h1 className="mx-auto">Remember to <strong>V O T E</strong> Nov. 6th</h1>
                
                <h2 className="">🇺🇸115th US Congress🇺🇸</h2>
                <h3 className="">From this public resource: <a href="https://www.congress.gov/">congress.gov</a></h3>
                <h6>Created for educational purposes only by <a href="https://github.com/alexanderjacks">Alexander Jacks</a>.</h6>
                {/* <CheckboxContainer /> */}
                <h6 className="donate">    
                    <span> Donate ETH <i className="fab fa-ethereum"></i>: 0xb93310db3ad5900494438cc1a5ae5300e86f7023</span>
                </h6>
                <h6 className="donate">
                    <span> Donate BTC <i className="fab fa-bitcoin"></i>: 12YpKeoQ7VToosj9MoQpcM6srAbnxs42gq</span>
                </h6>


{/*
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

                        <button type="button" className="btn-lg">
                        <a href="#bottom" className="bottom-btn arrow-btn">
                            <i className="fas fa-arrow-down"></i>
                            <span> Bottom</span>
                        </a>
                        </button>
                    </div>
                </div>
*/}
            </div>


{/* iterate thru the array list gathered from the API, create item for each array member*/}
            <div className="">

                { congresspersons.map(congressperson =>
                    
                    <div className={"my-0 semi-opaque"}>

                        <div className="row justify-content-around align-items-center">

{/*
<img class="card-img"src="/images/pathToYourImage.png"alt="Card image">
<div class="card-img-overlay">
<p class="card-title">I'm text that has a background image!</p></div>
<p class="card-subtitle">I'm text that has a background image!</p></div>
<p class="card-text">I'm text that has a background image!</p></div>
*/}

                        {/* extra layout column, reactive UI for mobile  */}
                            <div className={"card colors-" + congressperson.Party}>
                                <div className="col-4">
                                    <div className="biopic" id={"biopic-" + congressperson.ID}></div>
                                </div>
                                <div className="col-7">
                                    <p className="card-title">{congressperson.Name}</p>
                                    <p className="card-subtitle">{congressperson.Party} {congressperson.Office}</p>
                                    <p className="card-text">{congressperson.State} ({congressperson.Abbr})</p>
                                    <a href={congressperson.URL}><p className="mt-2">Official Homepage</p></a>
                                    <svg className={congressperson.Abbr + "-img StaTerritory"}></svg>
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
