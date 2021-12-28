/* This is free and unencumbered software released into the public domain. */

import { Contract } from './types';
import { Config } from '../../lib/config';

export const contracts: Record<string, Partial<Contract>> = {
  sum: {
    abi:
      '[{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"add","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}]',
    bytecode:
      '608060405234801561001057600080fd5b506101d6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063771602f714610030575b600080fd5b61004a600480360381019061004591906100b1565b610060565b6040516100579190610100565b60405180910390f35b6000818361006e919061014a565b905092915050565b600080fd5b6000819050919050565b61008e8161007b565b811461009957600080fd5b50565b6000813590506100ab81610085565b92915050565b600080604083850312156100c8576100c7610076565b5b60006100d68582860161009c565b92505060206100e78582860161009c565b9150509250929050565b6100fa8161007b565b82525050565b600060208201905061011560008301846100f1565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101558261007b565b91506101608361007b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101955761019461011b565b5b82820190509291505056fea2646970667358221220b92c1addca9674608403e2f1cc64e6125883eccd721332238992c0014c14fd5a64736f6c634300080b0033',
    data:
      '0x771602f700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002',
    output:
      '0x0000000000000000000000000000000000000000000000000000000000000003',
  },
  storageAt: {
    abi: '',
    bytecode: '',
    data: '',
  },
  callee: {
    abi:
      '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"Logger","type":"event"},{"inputs":[],"name":"log","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    bytecode:
      '6080604052348015600f57600080fd5b5060a08061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806351973ec914602d575b600080fd5b60336035565b005b6040513381527f3d3e19318feafa3ec0e596c266526601ba117100830ac640cbd2a65a32dcf53a9060200160405180910390a156fea2646970667358221220caf89a9e52b291840a452de6061014b97788ec5f98599e328f95750f37e4647064736f6c634300080b0033',
    output:
      '0x3d3e19318feafa3ec0e596c266526601ba117100830ac640cbd2a65a32dcf53a',
  },
  lowLevelCallCaller: {
    abi:
      '[{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"log","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    bytecode:
      '608060405234801561001057600080fd5b5061027a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80632c2ecbc214610030575b600080fd5b61004a60048036038101906100459190610186565b61004c565b005b8073ffffffffffffffffffffffffffffffffffffffff166351973ec960e01b604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516100db919061022d565b6000604051808303816000865af19150503d8060008114610118576040519150601f19603f3d011682016040523d82523d6000602084013e61011d565b606091505b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061015382610128565b9050919050565b61016381610148565b811461016e57600080fd5b50565b6000813590506101808161015a565b92915050565b60006020828403121561019c5761019b610123565b5b60006101aa84828501610171565b91505092915050565b600081519050919050565b600081905092915050565b60005b838110156101e75780820151818401526020810190506101cc565b838111156101f6576000848401525b50505050565b6000610207826101b3565b61021181856101be565b93506102218185602086016101c9565b80840191505092915050565b600061023982846101fc565b91508190509291505056fea2646970667358221220017eaab1b1a8e4f4aa4082495aa8b5694429e41c59a760f0e4aa39c73b8f320564736f6c634300080b0033',
  },
  lowLevelCallDelegateCaller: {
    abi:
      '[{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"log","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    bytecode:
      '608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80632c2ecbc214610030575b600080fd5b61004361003e3660046100c9565b610045565b005b60408051600481526024810182526020810180516001600160e01b03166351973ec960e01b17905290516001600160a01b03831691610083916100f9565b600060405180830381855af49150503d80600081146100be576040519150601f19603f3d011682016040523d82523d6000602084013e6100c3565b606091505b50505050565b6000602082840312156100db57600080fd5b81356001600160a01b03811681146100f257600080fd5b9392505050565b6000825160005b8181101561011a5760208186018101518583015201610100565b81811115610129576000828501525b50919091019291505056fea26469706673582212200628b7a2235d63ff2a4bcb2421fc4e8cc3bb21e083eea3cdf85e6cbb839ceae664736f6c634300080b0033',
  },
  directContractCaller: {
    abi:
      '[{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"log","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    bytecode:
      '608060405234801561001057600080fd5b5060f68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80632c2ecbc214602d575b600080fd5b603c60383660046092565b603e565b005b806001600160a01b03166351973ec96040518163ffffffff1660e01b8152600401600060405180830381600087803b158015607857600080fd5b505af1158015608b573d6000803e3d6000fd5b5050505050565b60006020828403121560a357600080fd5b81356001600160a01b038116811460b957600080fd5b939250505056fea26469706673582212204d346c9db5c38dcbad8813dfe94c2221953073ed76ad838b7f9352cc9ed5bacf64736f6c634300080b0033',
  },
};

export const gasPrice = '0x0';
export const gas = '0x0';
export const rpcProviderUrl = 'http://localhost:8545';
export const privateKeyHex =
  'fa5411587e855bb1e8273bc728f4fc1a092e2dd61ddf788a31b98d78cca95028';
export const publicKey = '0x702ed64ad1ed211a3cb3c4d7e8b5ca862f7527d6';

export const config: Config = {
  debug: false,
  verbose: false,
  force: false,
  database: 'postgres://aurora:aurora@localhost:5432/aurora',
  broker: undefined,
  port: 8545,
  network: 'testnet',
  endpoint: 'http://localhost:3030', // TODO: change to local NEAR RPC
  engine: 'aurora',
  signer: '', // TODO: singer handle here
  signerKey: '', // TODO: singer key here
  signerKeys: [],
  blacklistIPs: new Set(),
  blacklistEOAs: new Set(),
  blacklistCAs: new Set(),
  writable: true,
  errorLog: undefined,
};
