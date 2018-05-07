import Web3 from 'web3';
const contractAddress = '0xb6142fa287c1cd15c61ae8f7aad2ba03bf26b9b6';
const abi = [
	{
		constant: true,
		inputs: [],
		name: 'kitty',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '',
				type: 'address'
			}
		],
		name: 'contributors',
		outputs: [
			{
				name: '',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'status',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		name: 'insuranceClaims',
		outputs: [
			{
				name: 'claimant',
				type: 'address'
			},
			{
				name: 'id',
				type: 'uint32'
			},
			{
				name: 'amount',
				type: 'uint256'
			},
			{
				name: 'reasonForClaim',
				type: 'string'
			},
			{
				name: 'approvalCount',
				type: 'uint8'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '',
				type: 'address'
			}
		],
		name: 'contributions',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: 'amount',
				type: 'uint256'
			},
			{
				name: 'reasonForClaim',
				type: 'string'
			}
		],
		name: 'makeClaim',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '',
				type: 'address'
			}
		],
		name: 'payouts',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'contribute',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'withdrawPayoutFunds',
		outputs: [
			{
				name: '',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'getNumberOfClaims',
		outputs: [
			{
				name: 'numberOfClaims',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: 'id',
				type: 'uint32'
			}
		],
		name: 'approveClaim',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'contributorCount',
		outputs: [
			{
				name: '',
				type: 'uint32'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		payable: true,
		stateMutability: 'payable',
		type: 'fallback'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				name: 'reasonForClaim',
				type: 'string'
			},
			{
				indexed: false,
				name: 'claimant',
				type: 'address'
			},
			{
				indexed: false,
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'LogClaimProcessed',
		type: 'event'
	}
];

let web3;

if (typeof window.web3 !== 'undefined' && typeof window.web3 != 'undefined') {
	// Use Mist/MetaMask's provider
	web3 = new Web3(window.web3.currentProvider);

	// if (web3.version.network !== '4') {
	// 	alert('Please connect to the Rinkeby network');
	// }
} else {
	console.warn(
		'Please use a dapp browser like mist or MetaMask plugin for chrome'
	);
}

const contractInstance = new web3.eth.Contract(abi, contractAddress);

export default contractInstance;
