import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './App.css';

const Page = ({ title }) => (
    <div className="App" id="a3">
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
            me N<FontAwesome
            name='cog'
            className='fa-1x emboss'
            spin
          />
            tes</h2>
    </div>

    <p className="App-intro mt-3">
    So we're building a machine
    </p>

      <p>
        <ButtonGroup>
          <Button
            name='button'
            className="btn-secondary hyper"
          >Close <span className="fa-stack">
            <FontAwesome
              name='square'
              className='fa-stack-2x'
              size='2x'
              style={{ color:'white' }}
            />
            <FontAwesome
              name='window-close'
              className='fa-stack-1x text-danger'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary hyper"
          >I/O <span className="fa-stack">
            <FontAwesome
              name='comment'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='microchip'
              className='fa-stack-1x text-info'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary hyper"
          >Rate <span className="fa-stack">
            <FontAwesome
              name='star'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='star-o'
              className='fa-stack-1x text-warning'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary hyper"
          >Spend <span className="fa-stack">
            <FontAwesome
              name='circle'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='money'
              className='fa-stack-1x text-success'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <DropdownButton
            name='button'
            className="btn-secondary"
            title='Edit'

            >
            <span className="fa-stack">
            <FontAwesome
              name='cloud'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='terminal'
              className='fa-stack-1x'
              size='1x'
              style={{ color: 'white' }}
            />
          </span>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
        </ButtonGroup>
      </p>
      <p className="App-intro mt-3">
        Another splendid hybrid
      </p>
      <h2>Shooting for stained glass over tie-dye
      </h2>
      <div className="card-deck">
  <div className="card p-2 m-3 prestigiditation">
    <div className="card-body">
      <h4 className="card-title emboss d-inline">Prestigiditation</h4>
      <FontAwesome
            name='shower'
            className='emboss d-inline pl-3'
            size='3x'
            style={{  }}
       />
      <p className="card-text">Magic tricks performed as entertainment.</p>
    </div>
  </div>
  <div className="card p-2 m-3 ledgerdemain">
    <div className="card-body">
      <h4 className="card-title emboss d-inline">Legerdemain</h4>
          <FontAwesome
                name='handshake-o'
                className='emboss d-inline pl-3'
                size='3x'
                style={{  }}
           />
      <p className="card-text">Skillful use of one's hands when performing conjuring tricks..</p>
    </div>
  </div>
  <div className="card p-2 m-3 ensorcellment">
    <div className="card-body">
      <h4 className="card-title emboss d-inline">Ensorcellment</h4>
          <FontAwesome
                name='eye-slash'
                className='emboss d-inline pl-3'
                size='3x'
                style={{  }}
           />
      <p className="card-text">To enchant; bewitch. [French ensorceler, from Old French ensorcerer, ensorceler : en-, intensive pref.; see en-1 + sorcier, sorcerer; see sorcerer.] en·sor′cell·ment n</p>
    </div>
  </div>
</div>

      <h6>Font Awesome Notes on Crypto
      </h6>
      <p className="row justify-content-around">
        <Link className="fire" to="/">Home</Link>
        <a href="https://www.alexanderjacks.biz"><span className="fire"> Author</span></a>
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
