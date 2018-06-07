import web3 from './web3';
//const contractAddress = '0xb6142fa287c1cd15c61ae8f7aad2ba03bf26b9b6';
//const contractAddress = '0x382071e63f2d8c47c3b77579b07211b240593325';
//const contractAddress = '0xf1c0391f443279e0b46ee53aba34d513157b15d3';
const contractAddress = '0xf7a9782849931cded2cdd6290e2ef0670272f820';

//const contractAddress = '0x098b05c138a7ddf1964fde4943a6388348ff02ea'; this is the addresss for local geth version.
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

const contractInstance = new web3.eth.Contract(abi, contractAddress);

export default contractInstance;
