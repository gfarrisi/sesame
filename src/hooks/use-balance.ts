import { ethers } from 'ethers';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useIsOnline } from './use-is-online';
import { useWallet } from './use-wallet';

const balanceAtom = atom<number>(0);

const providers = {
  mainnet: new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com'),
  goerli: new ethers.providers.JsonRpcProvider(
    'https://goerli.blockpi.network/v1/rpc/public',
  ),
};
export const useBalance = (network: 'mainnet' | 'goerli'): number => {
  const [balance, setBalance] = useAtom(balanceAtom);
  const wallet = useWallet();
  const isOnline = useIsOnline();
  const { address } = wallet;
  const fetchBalance = () => {
    return providers[network].getBalance(address).then((bal) => {
      setBalance(Number(ethers.utils.formatEther(bal)));
    });
  };
  useEffect(() => {
    if (!address || !isOnline) return;
    const intervalId = setInterval(async () => {
      fetchBalance();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [address, isOnline]);
  return balance;
};
