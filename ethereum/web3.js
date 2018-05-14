import Web3 from 'web3';
let web3;

if (typeof window.web3 !== 'undefined' && typeof window.web3 != 'undefined') {
	// Use Mist/MetaMask's provider
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
