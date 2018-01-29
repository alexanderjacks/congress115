import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import {  } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

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
    />
    me
    </span>
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

</div>

{/* quips, under dev */}

      <p className="App-intro mt-3">
        Here's a site built around a widget lifted graciously from my favorite crypto currency research resource, <a href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=localhost&utm_content=bitcoin">coinmarketcap</a>. I've had to index the currencies by current market cap by hand so they may be stale-- I can't yet grok how to 'listen' to the widget data using React and Sass, so as to automatically rank them descending. Eventually I'll figure it out, or perhaps source it from a different service and mush them both together.
      </p>
      <p className="App-intro mt-3">
        Leveraging a site widget without relying on an API seems like a useful technique. I'm surprised it's possible with only this small amount of finesse with Sass and React.
      </p>


      <h1 className="center">Font Awesome Crypto Notes</h1>
      <h3 className="center">Icon key will go here, in small table</h3>

{/* begin list of widgets */}

      <div className="coinmarketcap-currency-widget bg1" data-currency="bitcoin" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg2" data-currency="ethereum" data-base="USD"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget bg3" data-currency="ripple" data-base="ETH"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget bg4" data-currency="bitcoin-cash" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg5" data-currency="cardano" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg6" data-currency="stellar" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg7" data-currency="litecoin" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg9" data-currency="eos" data-base="ETH"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget bg8" data-currency="neo" data-base="ETH"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget bg10" data-currency="nem" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg14" data-currency="iota" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg12" data-currency="dash" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg13" data-currency="monero" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget bg11" data-currency="tron" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

     <h6>Font Awesome Crypto Notes
     </h6>
     <p className="row justify-content-around">
       <Link className="fire" to="/">Home</Link>
       <a href="https://www.alexanderjacks.com"><span className="fire"> Author</span></a>
       <Link className="fire" to="/settings">Settings</Link>
     </p>
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
