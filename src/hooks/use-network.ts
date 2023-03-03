import { useState } from 'react';

const DEFAULT_NETWORK = 'mainnet';
const NETWORK_DATA_KEY = 'sesame-network';

interface NetworkData {
  chain: string;
}

export type Chain = {
  chain_id: number;
  name: string;
  label: string;
  symbol: string;
};
export const chains: Chain[] = [
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
];

export const useNetwork = (network = DEFAULT_NETWORK) => {
  const [chain, setChain] = useState<string>('');

  //   useEffect(() => {
  //     const storedData = localStorage.getItem(NETWORK_DATA_KEY);
  //     if (storedData) {
  //       const chainData = JSON.parse(storedData) as NetworkData;
  //       setChain(chainData.chain);
  //     } else {
  //       const networkData = {
  //         chain: network,
  //       };
  //       localStorage.setItem(NETWORK_DATA_KEY, JSON.stringify(networkData));
  //       setChain(network);
  //     }
  //   }, []);

  return {
    chain,
    chains,
  };
};

type Network = {
  chain: number;
};

export function useSwitchNetwork(networkSwitch: { chain: number }) {
  return {
    chains,
  };
}
