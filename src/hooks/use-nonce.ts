import { useIsOnline } from '@/hooks/use-is-online';
import { useNetwork } from '@/hooks/use-network';
import { useWallet } from '@/hooks/use-wallet';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { providersByChainName } from './use-balance';

const noncesAtom = atomWithStorage<{ [address: string]: number }>('nonces', {});

export const useNonce = () => {
  const [nonces, setNonces] = useAtom(noncesAtom);
  const { address } = useWallet();
  const { chain } = useNetwork();
  const isOnline = useIsOnline();
  // this chain.name is not updating correctly away from mainnet to goerli
  const fetchNonce = (): Promise<number> => {
    return providersByChainName[chain.name].getTransactionCount(address);
  };
  const incrementNonce = () =>
    setNonces((oldNonce) => ({
      ...oldNonce,
      [chain.name]: oldNonce[chain.name] + 1,
    }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!address || !isOnline) {
        return;
      }
      fetchNonce()
        .then((newNonce) => {
          setNonces((oldNonce) => ({
            ...oldNonce,
            [chain.name]: newNonce,
          }));
        })
        .catch(() => {});
    }, 3000);

    return () => clearInterval(intervalId);
  }, [chain.name, address, isOnline]);
  return { nonce: nonces[chain.name], incrementNonce };
};
