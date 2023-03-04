import { providers } from '@/hooks/use-balance';
import { useIsOnline } from '@/hooks/use-is-online';
import { useNetwork } from '@/hooks/use-network';
import { BigNumber } from 'ethers';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';

type FeeData = Partial<{
  lastBaseFeePerGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  gasPrice: BigNumber;
}>;
export type AllFeeData = Record<'mainnet' | 'goerli', FeeData>;
const feeDataAtom = atomWithStorage<AllFeeData>('fee-data', {
  mainnet: {},
  goerli: {},
});

export const useFeeData = (): FeeData | null => {
  const [feeData, setFeeData] = useAtom(feeDataAtom);
  const { chain } = useNetwork();
  const isOnline = useIsOnline();
  const fetchFeeData = () => {
    return providers[chain.name].getFeeData().then((_feeData) => {
      return setFeeData((oldData) => ({ ...oldData, [chain.name]: _feeData }));
    });
  };
  useEffect(() => {
    fetchFeeData();
  }, []);
  useEffect(() => {
    if (!isOnline) return;
    const intervalId = setInterval(async () => {
      fetchFeeData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [chain.name, isOnline]);
  return feeData[chain.name] || null;
};
