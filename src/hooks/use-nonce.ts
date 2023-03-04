import { providers } from '@/hooks/use-balance';
import { useIsOnline } from '@/hooks/use-is-online';
import { useNetwork } from '@/hooks/use-network';
import { useWallet } from '@/hooks/use-wallet';
import { ethers } from 'ethers';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';

const noncesAtom = atomWithStorage<{ [address: string]: number }>('nonce', {});

export const useNonce = (): number => {
  const [nonce, setNonce] = useAtom(noncesAtom);
  const { address } = useWallet();
  const { chain } = useNetwork();
  const isOnline = useIsOnline();
  // this chain.name is not updating correctly away from mainnet to goerli
  const fetchNonce = (): Promise<number> => {
    if (!address || !isOnline) {
      return Promise.resolve(0);
    }
    return providers[chain.name].getTransactionCount(address);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNonce()
        .then((newNonce) => {
          setNonce((oldNonce) => ({
            ...oldNonce,
            [chain.name]: Number(ethers.utils.formatEther(newNonce)),
          }));
        })
        .catch(() => {});
    }, 3000);

    return () => clearInterval(intervalId);
  }, [chain.name]);
  return nonce[chain.name];
};
