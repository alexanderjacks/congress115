import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import {  } from 'react-bootstrap'
import * as Icon from 'react-cryptocoins'
import FontAwesome from 'react-fontawesome'
import { BespokeCog } from './BespokeCog'

import './App.css';

const Page = ({ title }) => (
    <div className="App">

{/* title, gears for Ohs */}
<div className="App-header row justify-content-center">

<h1 className="emboss">
    {/* line 1 */}
    <span className="d-block">F<FontAwesome
        name='cog'
        className='fa-1x emboss'
        spin
    />nt Awes<FontAwesome
        name='cog'
        className='fa-1x emboss'
        spin
    />me</span>
    {/* line 2 */}
    <span className="d-block">Crypt<FontAwesome
        name='cog'
        className='fa-1x emboss'
        spin
    />  N<FontAwesome
        name='cog'
        className='fa-1x emboss'
        spin
    />
    tes
    </span>
</h1>
<h6 className="emboss">
    Created for educational purposes only. Not intended as a replacement for professional investment advice-- this is only a hobby of mine. :)
</h6>

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

    <h5>Font Awesome Icon Key</h5>
    {/* clip to next comment per pill, remove middle div 2nd row */}
    <div className="icontray">
        <div className="row justify-content-around">
            <span><FontAwesome name='stop-circle' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Finite</h6></span>
            <span><FontAwesome name='stop' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Infinite</h6></span>
            <span><FontAwesome name='file-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Fungible</h6></span>
            <span><FontAwesome name='file-text-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Traceable</h6></span>
            <span><FontAwesome name='chain' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Original</h6></span>
            <span><FontAwesome name='unlink' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Altcoin</h6></span>
        </div>
        <div className="row justify-content-around">
            <span><FontAwesome name='shower' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Best ASIC</h6></span>
            <span><FontAwesome name='tv' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Best GPU</h6></span>
            <span><FontAwesome name='microchip' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Any mining</h6></span>
            <span><FontAwesome name='question-circle-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Anonymous</h6></span>
            <span><FontAwesome name='hand-spock-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Non-profit</h6></span>
        </div>
    </div>

{/* begin list of widgets */}

{/* top 10 */}

    <div className="bg bg1">
        <div className="coinmarketcap-currency-widget" data-currency="bitcoin" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false">
        </div>
        <div className="icontray">
            <div className="row justify-content-around">
                <span><FontAwesome name='stop-circle' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Finite</h6></span>
                <span><FontAwesome name='file-text-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Traceable</h6></span>
                <span><FontAwesome name='chain' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Original</h6></span>
                <span><FontAwesome name='shower' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Best ASIC</h6></span>
            </div>
        </div>
    </div>

    <div className="bg bg2">
    <div className="coinmarketcap-currency-widget" data-currency="ethereum" data-base="USD"  data-secondary="BTC"></div>
        <div className="icontray">
            <div className="row justify-content-around">
                <span><FontAwesome name='stop' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Infinite</h6></span>
                <span><FontAwesome name='file-text-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Traceable</h6></span>
                <span><FontAwesome name='unlink' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Altcoin</h6></span>
                <span><FontAwesome name='microchip' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Any mining</h6></span>
                <span><FontAwesome name='hand-spock-o' className='fa-3x p-2 emboss d-inline' /><br/><h6 className="center">Non-profit</h6></span>
            </div>
        </div>
    </div>

    <div className="coinmarketcap-currency-widget bg bg3" data-currency="ripple" data-base="ETH"  data-secondary="BTC"></div>

    <div className="coinmarketcap-currency-widget bg bg4" data-currency="bitcoin-cash" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg5" data-currency="cardano" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg8" data-currency="neo" data-base="ETH"  data-secondary="BTC"></div>

    <div className="coinmarketcap-currency-widget bg bg7" data-currency="litecoin" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg6" data-currency="stellar" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg10" data-currency="nem" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg9" data-currency="eos" data-base="ETH"  data-secondary="BTC"></div>

{/* 11 - 20 */}

    <div className="coinmarketcap-currency-widget bg bg12" data-currency="iota" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg14" data-currency="dash" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg13" data-currency="monero" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg11" data-currency="tron" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg16" data-currency="icon" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg17" data-currency="qtum" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg15" data-currency="ethereum-classic" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg19" data-currency="bitcoin-gold" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg22" data-currency="populous" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg20" data-currency="lisk" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

{/* 21 - 30*/}

    <div className="coinmarketcap-currency-widget bg bg21" data-currency="raiblocks" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg24" data-currency="tether" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volumze="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg23" data-currency="omisego" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg18" data-currency="zcash" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg25" data-currency="stratis" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg26" data-currency="binance-coin" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg27" data-currency="bytecoin-bcn" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volumze="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg28" data-currency="siacoin" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg29" data-currency="verge" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

    <div className="coinmarketcap-currency-widget bg bg30" data-currency="ardor" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>



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

const TestComponent = () => (
    <div>Test test test
    </div>

)

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
