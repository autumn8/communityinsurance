/* IMPORTANT

This is a temporary measure to address an issue when running web3js v1 where httpprovider
has been deprecated in favour of websocketProvider. However when we use metamask's currentProvider we do not get
a websocketprovider and since you can only subscribe to events with a /ws provider with web3 v1, we're using metamask's provider for making
method calls, and this standalone web3 instance for subscribing to events using an infura websocket connection.
*/

import Web3 from 'web3';
let webSocket3 = new Web3('wss://rinkeby.infura.io/ws');
const contractAddress = '0x382071e63f2d8c47c3b77579b07211b240593325';
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
		inputs: [],
		name: 'minNumApproversRequired',
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
				name: 'amountContributed',
				type: 'uint256'
			},
			{
				indexed: false,
				name: 'kitty',
				type: 'uint256'
			},
			{
				indexed: false,
				name: 'contributor',
				type: 'address'
			}
		],
		name: 'LogContributionReceived',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				name: 'claimaint',
				type: 'address'
			},
			{
				indexed: false,
				name: 'amount',
				type: 'uint256'
			},
			{
				indexed: false,
				name: 'reasonForClaim',
				type: 'string'
			}
		],
		name: 'LogClaimCreated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				name: 'claimant',
				type: 'address'
			},
			{
				indexed: false,
				name: 'amount',
				type: 'uint256'
			},
			{
				indexed: false,
				name: 'reasonForClaim',
				type: 'string'
			}
		],
		name: 'LogClaimProcessed',
		type: 'event'
	}
];

const websocket3Instance = new webSocket3.eth.Contract(abi, contractAddress);

export default websocket3Instance;
