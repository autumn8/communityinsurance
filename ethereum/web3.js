import Web3 from 'web3';
let web3;

if (typeof window.web3 !== 'undefined' && typeof window.web3 != 'undefined') {
	// // Use Mist/MetaMask's provider
	// //web3 = new Web3('wss://rinkeby.infura.io/ws');
	// var provider = new Web3.providers.WebsocketProvider(
	// 	'wss://rinkeby.infura.io/ws'
	// );
	// window.web3.setProvider(provider);
	web3 = new Web3(window.web3.currentProvider);

	// if (web3.version.network !== '4') {
	// 	alert('Please connect to the Rinkeby network');
	// }
} else {
	console.warn(
		'Please use an Ethereum aware browser like Mist or install the MetaMask plugin for chrome'
	);
}

export default web3;

/*

networks:

wss://mainnet.infura.io/ws
wss://ropsten.infura.io/ws
wss://rinkeby.infura.io/ws

const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));

const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
  if (error) return console.error(error);

  console.log('Successfully subscribed!', blockHeader);
}).on('data', (blockHeader) => {
  console.log('data: ', blockHeader);
});

// unsubscribes the subscription
subscription.unsubscribe((error, success) => {
  if (error) return console.error(error);

  console.log('Successfully unsubscribed!');
});


 //solidity docs

var Web3 = require('web3');
// use the given Provider, e.g in Mist, or instantiate a new websocket provider
var web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
// or
var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://remotenode.com:8546'));



// Using the IPC provider in node.js
var net = require('net');

var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path

//end solidity docs

for ganache:\

web3 = new Web3()
  const eventProvider = new Web3.providers.WebsocketProvider('ws://localhost:7545')
  web3.setProvider(eventProvider)


See drizzle implementation for overriding metamask's provider with websocket provider:
https://github.com/relevant-community/drizzle/blob/master/src/Drizzle.js

excerpt:


    if (typeof window.web3 !== 'undefined' && !ignoreMetamask && !useMetamask) {
      this.web3 = new Web3(window.web3.currentProvider)
    } else {

      if (this.options.web3.fallback) {
        // Attempt fallback if no web3 injection.
        console.log('No web3 instance injected, using fallback.')

        switch (this.options.web3.fallback.type) {
          case 'ws':
            var provider = new Web3.providers.WebsocketProvider(this.options.web3.fallback.url)
            this.web3 = new Web3(provider)
            if (typeof window.web3 !== 'undefined' && useMetamask) {
              var metamaksProvider = window.web3.currentProvider
              window.web3 = new Web3(metamaksProvider)
              this.metamaskWeb3 = window.web3
            }
            this.store.dispatch({type: 'WEB3_INITIALIZED'})
            return this.getAccounts()
            break
          default:
            // Invalid options; throw.
            this.store.dispatch({type: 'WEB3_FAILED'})
            console.error('Invalid web3 fallback provided.')
        }
      }



*/
