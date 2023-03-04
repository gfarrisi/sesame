import { ethers } from 'ethers';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { providers } from './use-balance';
import { useIsOnline } from './use-is-online';
import { useNetwork } from './use-network';
import { useWallet } from './use-wallet';

const noncesAtom = atomWithStorage<{ [address: string]: number }>('nonce', {});

export const useNonce = (): number => {
  const [nonce, setNonce] = useAtom(noncesAtom);
  const { address } = useWallet();
  const { chain } = useNetwork();
  const isOnline = useIsOnline();
  const fetchNonce = () => {
    return providers[chain.name].getTransactionCount(address).then((bal) => {
      setNonce((oldNonce) => ({
        ...oldNonce,
        [chain.name]: Number(ethers.utils.formatEther(bal)),
      }));
    });
  };
  useEffect(() => {
    if (!address || !isOnline) return;
    const intervalId = setInterval(async () => {
      fetchNonce();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [address, isOnline]);
  return nonce[chain.name];
};
