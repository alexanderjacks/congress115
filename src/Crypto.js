import React from 'react';
import axios from 'axios';

const API = 'https://api.coinmarketcap.com/v1/ticker/?start=0&limit=77';


class Crypto extends React.Component {
	state = {
		coins: []
	}

	componentDidMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=77')
			.then(res => {
				const coins = res.data;
				this.setState({ coins });
			})
	}


	render() {
		return (
			<ul>
				{ this.state.coins.map(coin =>
					<li>{coin.name}</li>)
				}
			</ul>
		);
	}
}

export default Crypto;

