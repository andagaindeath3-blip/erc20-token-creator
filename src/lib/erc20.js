export const erc20Abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "initialSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "decimals_",
                "type": "uint8"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]



export const erc20ByteCode = "6080604052346103ff57610bda8038038061001981610403565b9283398101906080818303126103ff5780516001600160401b0381116103ff5782610045918301610428565b602082015190926001600160401b0382116103ff57610065918301610428565b906060604082015191015160ff811681036103ff5783516001600160401b03811161031057600354600181811c911680156103f5575b60208210146102f257601f8111610392575b50602094601f821160011461032f579481929394955f92610324575b50508160011b915f199060031b1c1916176003555b82516001600160401b03811161031057600454600181811c91168015610306575b60208210146102f257601f811161028f575b506020601f821160011461022c57819293945f92610221575b50508160011b915f199060031b1c1916176004555b331561020e5760055490336001600160a01b0383167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a36001600160a81b03199091163360ff60a01b19161760a09190911b60ff60a01b16176005556002548181019081106101fa57600255335f525f60205260405f208181540190556040519081525f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203393a3604051610760908161047a8239f35b634e487b7160e01b5f52601160045260245ffd5b631e4fbdf760e01b5f525f60045260245ffd5b015190505f8061012a565b601f1982169060045f52805f20915f5b8181106102775750958360019596971061025f575b505050811b0160045561013f565b01515f1960f88460031b161c191690555f8080610251565b9192602060018192868b01518155019401920161023c565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106102e8575b601f0160051c01905b8181106102dd5750610111565b5f81556001016102d0565b90915081906102c7565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100ff565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100c9565b601f1982169560035f52805f20915f5b88811061037a57508360019596979810610362575b505050811b016003556100de565b01515f1960f88460031b161c191690555f8080610354565b9192602060018192868501518155019401920161033f565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c810191602084106103eb575b601f0160051c01905b8181106103e057506100ad565b5f81556001016103d3565b90915081906103ca565b90607f169061009b565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761031057604052565b81601f820112156103ff578051906001600160401b03821161031057610457601f8301601f1916602001610403565b92828452602083830101116103ff57815f9260208093018386015e830101529056fe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461052157508063095ea7b31461049f57806318160ddd1461048257806323b872dd146103a3578063313ce5671461038057806370a0823114610349578063715018a6146102ee5780638da5cb5b146102c657806395d89b41146101ab578063a9059cbb1461017a578063dd62ed3e1461012a5763f2fde38b146100a0575f80fd5b34610126576020366003190112610126576100b961061a565b6100c1610703565b6001600160a01b0316801561011357600580546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b346101265760403660031901126101265761014361061a565b61014b610630565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b34610126576040366003190112610126576101a061019661061a565b6024359033610646565b602060405160018152f35b34610126575f366003190112610126576040515f6004548060011c906001811680156102bc575b6020831081146102a85782855290811561028c5750600114610237575b50819003601f01601f191681019067ffffffffffffffff8211818310176102235761021f829182604052826105f0565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b828210610276575060209150820101826101ef565b6001816020925483858801015201910190610261565b90506020925060ff191682840152151560051b820101826101ef565b634e487b7160e01b5f52602260045260245ffd5b91607f16916101d2565b34610126575f366003190112610126576005546040516001600160a01b039091168152602090f35b34610126575f36600319011261012657610306610703565b600580546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610126576020366003190112610126576001600160a01b0361036a61061a565b165f525f602052602060405f2054604051908152f35b34610126575f36600319011261012657602060ff60055460a01c16604051908152f35b34610126576060366003190112610126576103bc61061a565b6103c4610630565b6001600160a01b0382165f818152600160209081526040808320338452909152902054909260443592915f198110610402575b506101a09350610646565b838110610467578415610454573315610441576101a0945f52600160205260405f2060018060a01b0333165f526020528360405f2091039055846103f7565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b34610126575f366003190112610126576020600254604051908152f35b34610126576040366003190112610126576104b861061a565b602435903315610454576001600160a01b031690811561044157335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b34610126575f366003190112610126575f6003548060011c906001811680156105e6575b6020831081146102a85782855290811561028c57506001146105915750819003601f01601f191681019067ffffffffffffffff8211818310176102235761021f829182604052826105f0565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b8282106105d0575060209150820101826101ef565b60018160209254838588010152019101906105bb565b91607f1691610545565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361012657565b602435906001600160a01b038216820361012657565b6001600160a01b03169081156106f0576001600160a01b03169182156106dd57815f525f60205260405f20548181106106c457817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b63ec442f0560e01b5f525f60045260245ffd5b634b637e8f60e11b5f525f60045260245ffd5b6005546001600160a01b0316330361071757565b63118cdaa760e01b5f523360045260245ffdfea26469706673582212205004c2f9d913ff5ab093aab94787f9739d353b84456c744a63dc3122f305defe64736f6c634300081c0033"