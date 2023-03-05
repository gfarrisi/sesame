import { atom, useAtom } from 'jotai';

export const chains = [
  {
    chain_id: 1,
    name: 'mainnet',
    label: 'Mainnet',
    symbol: 'ETH',
    logo_url:
      'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    rpcUrls: ['https://eth.llamarpc.com'],
  },
  {
    chain_id: 5,
    name: 'goerli',
    label: 'Goerli',
    symbol: 'GETH',
    logo_url:
      'https://assets.coingecko.com/coins/images/29217/small/goerli-eth.png',
    rpcUrls: ['https://goerli.blockpi.network/v1/rpc/public'],
  },
  {
    chain_id: 137,
    name: 'polygon',
    label: 'Polygon',
    symbol: 'MATIC',
    logo_url:
      'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912',
    rpcUrls: [
      'https://rpc-mainnet.maticvigil.com',
      'https://matic-mainnet.chainstacklabs.com',
      'https://rpc-mainnet.matic.network',
    ],
  },
  {
    chain_id: 80001,
    name: 'polygon-mumbai',
    label: 'Polygon Mumbai',
    symbol: 'Mumbia MATIC',
    logo_url:
      'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912',
    rpcUrls: [
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.matic.network',
    ],
  },
  {
    chain_id: 10,
    name: 'optimism',
    label: 'Optimism',
    symbol: 'Optimism ETH',
    logo_url:
      'https://assets.coingecko.com/coins/images/25244/small/Optimism.png',
    rpcUrls: [
      'https://mainnet.optimism.io',
      'https://optimism-mainnet.infura.io/v3/your-project-id',
    ],
  },
  {
    chain_id: 42161,
    name: 'arbitrum',
    label: 'Arbitrum',
    symbol: 'Arbitrum ETH',
    logo_url:
      'https://assets.coingecko.com/nft_contracts/images/1822/small/https-fanbase-1-s3-amazonaws-com-quixotic-collection-profile-046qixwt_400x400-jpeg.jpg',
    rpcUrls: [
      'https://arb1.arbitrum.io/rpc',
      'https://arb1.ethrpc.codexprotocol.com',
    ],
  },
  {
    chain_id: 56,
    name: 'binance-smart-chain',
    label: 'Binance Smart Chain',
    symbol: 'BNB',
    logo_url:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
    rpcUrls: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
  },
] as const;

const networkAtom = atom<(typeof chains)[number]>(chains[0]);
export type ChainName = (typeof chains)[number]['name'];
export type ChainId = (typeof chains)[number]['chain_id'];
export const useNetwork = () => {
  const [chain, _setChain] = useAtom(networkAtom);
  const setChain = (networkName: ChainName) => {
    const newChain = chains.find((chain) => chain.name === networkName);
    if (!newChain) {
      throw new Error(`Chain "${networkName}" not found`);
    }
    _setChain(newChain);
  };

  return {
    chain,
    chains,
    setChain,
  };
};
