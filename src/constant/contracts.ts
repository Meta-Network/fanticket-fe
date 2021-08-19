import { ChainId, currentChainId } from ".";

export type AddressBookForNetwork = {
  [chainId in ChainId]: string;
};

export type OptionalAddressBookForNetwork = Partial<AddressBookForNetwork>;

export type ServiceAddressBook = {
  [chainId in ChainId]?: {
    [contractName: string]: string;
    MARKET: string;
    MEDIA: string;
  };
};

export const CONTRACTS: ServiceAddressBook = {
  [ChainId.BSC_TESTNET]: {
    MARKET: "0xAa9a113D8a8a62962578BFf1Be9dAB70336971B5",
    MEDIA: "0x520B66a0fEC5335Aba9f34774AAE8bfc2C27d234",
  },
  [ChainId.BSC_MAINNET]: {
    MARKET: "0x456bd9F5e006A27ec446DC2978e025590703823C",
    MEDIA: "0x75CB5AB6778454644cB6b0149c59dE99303fcaDf",
  },
};

export const MULTICALL_NETWORKS: AddressBookForNetwork = {
  [ChainId.MAINNET]: "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441",
  [ChainId.ROPSTEN]: "0x53C43764255c17BD724F74c4eF150724AC50a3ed",
  [ChainId.KOVAN]: "0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A",
  [ChainId.RINKEBY]: "0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821",
  [ChainId.GÖRLI]: "0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e",
  [ChainId.BSC_MAINNET]: "0xe348b292e8eA5FAB54340656f3D374b259D658b8",
  [ChainId.BSC_TESTNET]: "0xe348b292e8eA5FAB54340656f3D374b259D658b8",
};

export const WETH: AddressBookForNetwork = {
  [ChainId.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.ROPSTEN]: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  [ChainId.RINKEBY]: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  [ChainId.GÖRLI]: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  [ChainId.KOVAN]: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
  [ChainId.BSC_MAINNET]: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  [ChainId.BSC_TESTNET]: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
};

export const currentContracts = CONTRACTS[currentChainId];
export const currentMulticallAddress = MULTICALL_NETWORKS[currentChainId];
export const currentWETH = WETH[currentChainId];
