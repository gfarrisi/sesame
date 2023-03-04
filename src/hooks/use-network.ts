import { atom, useAtom } from 'jotai';

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

const networkAtom = atom<(typeof chains)[number]>(chains[0]);
export const useNetwork = () => {
  const [chain, _setChain] = useAtom(networkAtom);
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
