import React, { Component } from 'react'
import { Router, browserHistory, Route } from 'react-router'
import { MyFa } from './MyFa'
import { Widget } from './Widget'

import './App.css';

const Page = ({ title }) => (
<div className="App">
{/* title */}
    <div className="App-header row justify-content-around">
        <div>
            <h1 className="emboss">
{/* line 1 */}
                <span className="d-block">Colors of Crypto</span>
{/* line 2 */}
                <span className="d-block">Dashboard</span>
            </h1>
            <h6 className="emboss">
                Created for educational purposes only by <a href="https://github.com/Adjectival">Alexander Jacks</a>.
            </h6>
            <h6 className="emboss">
                Not intended as a replacement for professional investment advice.
            </h6>
            <h6 className="emboss">
                Donate ETH: 0xd74cb5c0e868B06DaEA6Bb25364dCF1f2C096855
            </h6>
            <h6 className="emboss">
                Donate LTC: LNJ9mQn5FLWmKhvDTwkbiEKBVdiMbGCEaV
            </h6>
            <p>
            </p>
        </div>
        <div className="icontray py-3 px-5">
            <h5>Font Awesome Icon Key</h5>
            <div className="row justify-content-around">
                <div className='justify-content-center m-2'><MyFa size={2} name='credit-card' /><h6>Pre-mined</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='stop-circle' /><h6>Finite</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='circle-o' /><h6>Infinite</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='shower' /><h6>Best ASIC</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='tv' /><h6>Best GPU</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='microchip' /><h6>Any mining</h6></div>
            </div>
            <div className="row justify-content-around">
                <div className='justify-content-center m-2'><MyFa size={2} name='chain' /><h6>Original</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='unlink' /><h6>Altcoin</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='file-o' /><h6>Fungible</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='file-text-o' /><h6>Traceable</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='question-circle-o' /><h6>Anonymous</h6></div>
                <div className='justify-content-center m-2'><MyFa size={2} name='hand-spock-o' /><h6>Non-profit</h6></div>
            </div>
        </div>

    </div>

{/* room for more info links, under dev ... */}

    <p className="row justify-content-around">
        <h5>
        <a href="http://alexanderjacks.biz"><span className="fire">Learn more about this App, visit my Portfolio</span></a>
        </h5>
    </p>


{/* begin list of widgets */}
    <div className="d-flex flex-wrap justify-content-around">

{/* top 10 */}

        <div className="pill bg-bitcoin"><Widget currency='bitcoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-ethereum"><Widget currency='ethereum' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='microchip' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-ripple"><Widget currency='ripple' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-bitcoin-cash"><Widget currency='bitcoin-cash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-litecoin"><Widget currency='litecoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-cardano"><Widget currency='cardano' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-neo"><Widget currency='neo' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-stellar"><Widget currency='stellar' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-eos"><Widget currency='eos' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-dash">
            <Widget currency='dash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

    {/* 11 - 20 */}

        <div className="pill bg-iota"><Widget currency='iota' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='credit-card' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-monero">
            <Widget currency='monero' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='tv' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-o' /></span>
                    <span className='p-2'><MyFa size={2} name='question-circle-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-nem"><Widget currency='nem' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='tv' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-ethereum-classic"><Widget currency='ethereum-classic' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='microchip' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="pill bg-vechain"><Widget currency='vechain' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-tron"><Widget currency='tron' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-lisk"><Widget currency='lisk' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-qtum"><Widget currency='qtum' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-bitcoin-gold"><Widget currency='bitcoin-gold' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-tether"><Widget currency='tether' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='money' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

    {/* 21 - 30*/}

        <div className="pill bg-omisego"><Widget currency='omisego' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='credit-card' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-icon"><Widget currency='icon' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-zcash"><Widget currency='zcash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='question-circle-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-bytecoin-bcn"><Widget currency='bytecoin-bcn' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='tv' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='question-circle-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-verge"><Widget currency='verge' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                    <div className='p-2'><MyFa size={2} name='hand-spock-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-steem"><Widget currency='steem' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                    <div className='p-2'><MyFa size={2} name='hand-spock-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-binance-coin"><Widget currency='binance-coin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-nano"><Widget currency='nano' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-stratis"><Widget currency='stratis' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                    <div className='p-2'><MyFa size={2} name='windows' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-populous"><Widget currency='populous' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-siacoin"><Widget currency='siacoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='server' /></div>
                </div>
            </div>
        </div>

        <div className="pill bg-ardor"><Widget currency='ardor' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='credit-card' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

{/*  end flowy widget zone */}
    </div>

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
