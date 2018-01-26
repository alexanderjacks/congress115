import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header row justify-content-center">
          <h2 className="emboss">F<FontAwesome
            name='cog'
            className='fa-1x emboss'
            spin
          />nt Awes<FontAwesome
            name='cog'
            className='fa-1x emboss'
            spin
          />
      me Crypt<FontAwesome
        name='cog'
        className='fa-1x emboss'
        spin
      />  N<FontAwesome
            name='cog'
            className='fa-1x emboss'
            spin
          />
            tes</h2>
      </div>

      <p className="App-intro mt-3">
        Another splendid hybrid
      </p>

      <h1 className="center">Font Awesome Notes on Crypto</h1>

      <div className="coinmarketcap-currency-widget b1" data-currency="bitcoin" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b2" data-currency="ethereum" data-base="USD"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget b3" data-currency="ripple" data-base="ETH"  data-secondary="BTC"></div>

      <div className="coinmarketcap-currency-widget b4" data-currency="bitcoin-cash" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b5" data-currency="cardano" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b6" data-currency="stellar" data-base="ETH" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b7" data-currency="litecoin" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="ETH" data-statsticker="false"></div>


      <div className="coinmarketcap-currency-widget b9" data-currency="eos" data-base="ETH"  data-secondary="BTC"></div>
      <div className="coinmarketcap-currency-widget b8" data-currency="neo" data-base="ETH"  data-secondary="BTC"></div>
      <div className="coinmarketcap-currency-widget b10" data-currency="nem" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b14" data-currency="iota" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b12" data-currency="dash" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b13" data-currency="monero" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <div className="coinmarketcap-currency-widget b11" data-currency="tron" data-base="ETH" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>

      <h2>Card Deck Bounces Now... But Enough, Yes?
      </h2>
      <div className="card-deck">
  <div className="card p-2 m-3">
    <div className="card-body">
      <h4 className="card-title dramatic-drop-shadow">Prestigiditation</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card p-2 m-3">
    <div className="card-body">
      <h4 className="card-title dramatic-drop-shadow">Legerdemain</h4>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card p-2 m-3">
    <div className="card-body">
      <h4 className="card-title dramatic-drop-shadow">Ensorcellment</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>

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
