import { ethers } from 'ethers';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { useIsOnline } from './use-is-online';
import { useWallet } from './use-wallet';

const balancesAtom = atomWithStorage<{ [network: string]: number }>(
  'wallet-balances',
  {
    mainnet: 0,
    goerli: 0,
  },
);

export const rpc = {
  mainnet: 'https://eth.llamarpc.com',
  goerli: 'https://goerli.blockpi.network/v1/rpc/public',
};

const providers = {
  mainnet: new ethers.providers.JsonRpcProvider(rpc.mainnet),
  goerli: new ethers.providers.JsonRpcProvider(rpc.goerli),
};
export const useBalance = (network: 'mainnet' | 'goerli'): number => {
  const [balance, setBalance] = useAtom(balancesAtom);
  const wallet = useWallet();
  const isOnline = useIsOnline();
  const { address } = wallet;
  const fetchBalance = () => {
    return providers[network].getBalance(address).then((bal) => {
      setBalance((oldBalance) => ({
        ...oldBalance,
        [network]: Number(ethers.utils.formatEther(bal)),
      }));
    });
  };
  useEffect(() => {
    if (!address || !isOnline) return;
    const intervalId = setInterval(async () => {
      fetchBalance();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [address, isOnline]);
  return balance[network];
};
