import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import { MyFa } from './MyFa'
import { Widget } from './Widget'

import './App.css';

const Page = ({ title }) => (
    <div className="App">
    {/* title, gears for Ohs */}
        <div className="App-header row justify-content-around">
            <div>
                <h1 className="emboss">
                    {/* line 1 */}
                    <span className="d-block">F<MyFa name='cog' size={1} spin />nt Awes<MyFa name='cog' size={1} spin />me</span>
                    {/* line 2 */}
                    <span className="d-block">Crypt<MyFa name='cog' size={1} spin />  N<MyFa name='cog' size={1} spin />tes</span>
                </h1>
                <h6 className="emboss">
                    Created for educational purposes only.
                </h6>
                <h6 className="emboss">
                    Not intended as a replacement for professional investment advice.
                </h6>
            </div>
            <div className="icontray py-3 px-5">
                <h5>Font Awesome Icon Key</h5>
                <div className="row justify-content-around">
                    <div className='justify-content-center m-2'><MyFa size={2} name='stop-circle' /><h6>Finite</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='stop' /><h6>Infinite</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='file-o' /><h6>Fungible</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='file-text-o' /><h6>Traceable</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='chain' /><h6>Original</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='unlink' /><h6>Altcoin</h6></div>
                </div>
                <div className="row justify-content-around">
                    <div className='justify-content-center m-2'><MyFa size={2} name='shower' /><h6>Best ASIC</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='tv' /><h6>Best GPU</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='microchip' /><h6>Any mining</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='question-circle-o' /><h6>Anonymous</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='hand-spock-o' /><h6>Non-profit</h6></div>
                </div>
            </div>

        </div>

    {/* more info links, under dev */}

        <p className="row justify-content-around">
            <h6>Dev Notes</h6>
            <Link className="fire" to="/settings">Settings</Link>
        {/*
            <p className="App-intro mt-3">
              Here's a site built around a widget from my favorite crypto currency research resource, <a href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=localhost&utm_content=bitcoin">coinmarketcap</a>. I've ranked the currencies by current market cap manually according to a more scholarly resource, <a href="https://cci30.com/">CCI30 Crypto Currencies Index</a>. Since I can't yet grok how to 'listen' to the widget data using React and Sass, they're not automatically ranked  descending according to either service. Eventually I'll figure this out, or perhaps source it from a third source and further blend all this together.
            </p>
            <p className="App-intro mt-3">
              Leveraging a site widget without relying on an API seems like a useful technique. I'm surprised it's possible with only this small amount of finesse with Sass and React.
            </p>
        */}

            <h6>App</h6>
            {/* will have icon key in place of info text; app ought to load in all 3 btns tho*/}
            <Link className="fire" to="/">Home</Link>

            <h6>About</h6>
            <a href="http://alexanderjacks.biz"><span className="fire"> Portfolio</span></a>
        </p>


{/* begin list of widgets */}

{/* top 10 */}

        <div className="bg bg1">
            <Widget currency='bitcoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg2">
            <Widget currency='ethereum' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='microchip' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg3"><Widget currency='ripple' /></div>

        <div className="bg bg4"><Widget currency='bitcoin-cash' /></div>

        <div className="bg bg5"><Widget currency='cardano' /></div>

        <div className="bg bg6"><Widget currency='stellar' /></div>

        <div className="bg bg8"><Widget currency='neo' /></div>

        <div className="bg bg7"><Widget currency='litecoin' /></div>

        <div className="bg bg9"><Widget currency='eos' /></div>

        <div className="bg bg10"><Widget currency='nem' /></div>

    {/* 11 - 20 */}

        <div className="bg bg12"><Widget currency='iota' /></div>

        <div className="bg bg14"><Widget currency='dash' /></div>

        <div className="bg bg13">
            <Widget currency='monero' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='file-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='tv' /></span>
                    <span className='p-2'><MyFa size={2} name='question-circle-o' /></span>
                </div>
            </div>
        </div>


        <div className="bg bg11"><Widget currency='tron' /></div>

        <div className="bg bg17"><Widget currency='qtum' /></div>

        <div className="bg bg20"><Widget currency='lisk' /></div>

        <div className="bg bg15"><Widget currency='ethereum-classic' /></div>

        <div className="bg bg24"><Widget currency='tether' /></div>

        <div className="bg bg19"><Widget currency='bitcoin-gold' /></div>

    {/* 21 - 30*/}
        <div className="bg bg16"><Widget currency='icon' /></div>

        <div className="bg bg21"><Widget currency='raiblocks' /></div>

        <div className="bg bg22"><Widget currency='populous' /></div>

        <div className="bg bg23"><Widget currency='omisego' /></div>

        <div className="bg bg18"><Widget currency='zcash' /></div>

        <div className="bg bg25"><Widget currency='stratis' /></div>

        <div className="bg bg27"><Widget currency='bytecoin-bcn' /></div>

        <div className="bg bg28"><Widget currency='siacoin' /></div>

        <div className="bg bg29"><Widget currency='verge' /></div>

        <div className="bg bg30"><Widget currency='ardor' /></div>

        <div className="bg bg26"><Widget currency='binance-coin' /></div>


    </div>
);



const Home = (props) => (
 <Page title="Home"/>
);

const About = (props) => (
 <Page title="About"/>
);

const Settings = (props) => (
 <Page title="Settings"/>
);

class App extends Component {
 render() {
   return (
     <Router history={browserHistory}>
       <Route path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/settings" component={Settings}/>
     </Router>

   );
 }
}


export default App;
