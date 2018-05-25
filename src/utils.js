import web3 from '../ethereum/web3';

function createNumberRange(length) {
	return Array(+length)
		.fill()
		.map((_, i) => i);
}

function getWeiAsEther(amount, fixed = 0) {
	return (+web3.utils.fromWei(amount, 'ether')).toFixed(fixed);
}

export { createNumberRange, getWeiAsEther };
