1) Style widget in situ.scss

// // stlye widget in situ! // //
// coin icon border
.coinmarketcap-currency-widget>div>div>div>img {
    border: 6px groove rgba(30,50,70,0.5);
}

// imposes label for BTC value
%labelBTCtext {
    content: "Fiat Value $US: ";
}
.coinmarketcap-currency-widget>div>div>div>span:nth-child(5)::before{
    color: ivory;
    @extend %labelBTCtext;
}

// shadows BTC exchange value
.coinmarketcap-currency-widget>div>div>div>span:nth-child(5){
    text-decoration: none;
    text-shadow: 2px 2px 3px #000,
    -2px -2px 3px #000,
    -2px 2px 3px #000,
    2px -2px 3px #000;
}

// somewhat imprecise targeting to enhance market change value
span span {
    text-decoration: none;
    text-shadow: 2px 2px 3px #000,
    -2px -2px 3px #000,
    -2px 2px 3px #000,
    2px -2px 3px #000;
}

// // widget title
// text embiggening
%bigger-title {
    font-size: 1.6em;
    font-family: 'Droid Sans';
}
// fire shadow effect
span a {
    text-decoration: none;
    text-shadow: 2px 2px 4px #f00,
    -2px -2px 4px #f00,
    -2px 2px 4px #ff0,
    2px -2px 4px #ff0;
    @extend %bigger-title;
}



<!-- modal trigger -->

  Dev Notes 1 <i class="fa fa-book"></i>


{/* Modal Dev1 */}
<p className="App-intro mt-3">
Here's a site built around a widget from my favorite crypto currency research resource, <a href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=localhost&utm_content=bitcoin">coinmarketcap</a>. I've ranked the currencies by current market cap manually according to a more scholarly resource, <a href="https://cci30.com/">CCI30 Crypto Currencies Index</a>. Since I can't yet grok how to 'listen' to the widget data using React and Sass, they're not automatically ranked  descending according to either service. Eventually I'll figure this out, or perhaps source it from a third source and further blend all this together.
</p>
<p className="App-intro mt-3">
Leveraging a site widget without relying on an API seems like a useful technique. I'm surprised it's possible with only this small amount of finesse with React and Sass.
</p>

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);
