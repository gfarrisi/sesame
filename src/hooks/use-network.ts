import { useState } from 'react';

export const chains = [
  {
    chain_id: 1,
    name: 'mainnet',
    label: 'Mainnet',
    symbol: 'ETH',
  },
  {
    chain_id: 5,
    name: 'goerli',
    label: 'Goerli',
    symbol: 'GETH',
  },
] as const;

export const useNetwork = () => {
  const [chain, _setChain] = useState<(typeof chains)[number]>(chains[0]);
  const setChain = (networkName: 'mainnet' | 'goerli') => {
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
