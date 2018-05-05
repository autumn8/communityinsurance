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

export default abi;
