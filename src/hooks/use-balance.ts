import { ethers } from 'ethers';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useWallet } from './use-wallet';

const balanceAtom = atom<number>(0);

const provider = new ethers.providers.JsonRpcProvider(
  'https://eth.llamarpc.com',
);
export const useBalance = (): number => {
  const [balance, setBalance] = useAtom(balanceAtom);
  const wallet = useWallet();
  const { address } = wallet;
  useEffect(() => {
    if (!address) return;
    // TODO: if online, fetch this in a loop
    provider.getBalance(address).then((bal) => {
      setBalance(Number(ethers.utils.formatEther(bal)));
    });
  }, [address]);
  return balance;
};
