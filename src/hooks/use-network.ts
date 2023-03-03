import { useEffect, useState } from 'react';

const DEFAULT_NETWORK = 'mainnet';
const NETWORK_DATA_KEY = 'sesame-network';

interface NetworkData {
  chain: string;
}

type Chain = {
  chain_id: number;
  name: string;
};

const chains: Chain[] = [
  {
    chain_id: 1,
    name: 'mainnet',
  },
];

export const useNetwork = (network = DEFAULT_NETWORK) => {
  const [chain, setChain] = useState<string>('');

  useEffect(() => {
    const storedData = localStorage.getItem(NETWORK_DATA_KEY);
    if (storedData) {
      const chainData = JSON.parse(storedData) as NetworkData;
      setChain(chainData.chain);
    } else {
      const networkData = {
        chain: network,
      };
      localStorage.setItem(NETWORK_DATA_KEY, JSON.stringify(networkData));
      setChain(network);
    }
  }, []);

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
