'use strict';
const ccxt = require('ccxt');
const strategy = rquire('./strategy.js');
function Bot() {
    this.exchange = {};
    this.exchanges = [];
    this.initExchange = function () {
        // TODO: reconstruct these code to use config.json
        let gateio = new ccxt.gateio({
            apiKey: 'A1028058-0003-47B8-AD78-5AECFA2C6157',
            secret: '7a00c4d2a2c9f17bf8e6528d89f6696f31404261e8e785beea4b4b0a28dd4442',
        });
        this.exchange = gateio;
        this.exchanges.push(gateio);
    };
    this.run = function () {
        this.initExchange();
        strategy.main(this.exchanges);
    };
}
var exports = module.exports = Bot;
