import { ChainName, chains, useNetwork } from '@/hooks/use-network';
import { BigNumber } from 'ethers';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { providersByChainName } from './use-balance';
import { useIsOnline } from './use-is-online';

type FeeData = Partial<{
  lastBaseFeePerGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  gasPrice: BigNumber;
}>;
export type AllFeeData = Record<ChainName, FeeData>;
const initialFeeData: AllFeeData = chains.reduce<Record<ChainName, FeeData>>(
  (acc, chain) => {
    acc[chain.name] = {};
    return acc;
  },
  {} as Record<ChainName, FeeData>,
);

const feeDataAtom = atomWithStorage('fee-data', initialFeeData);
export const useFeeData = (): FeeData | null => {
  const [feeData, setFeeData] = useAtom(feeDataAtom);
  const { chain } = useNetwork();
  const isOnline = useIsOnline();
  const fetchFeeData = () => {
    return providersByChainName[chain.name].getFeeData().then((_feeData) => {
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
