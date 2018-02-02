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
