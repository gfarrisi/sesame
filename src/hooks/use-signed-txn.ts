import { isAddress } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import { SignTransactionArgs } from '../utils/helpers';
import { signTransaction } from './../utils/helpers';

export const useSignedTxn = (args: SignTransactionArgs): string => {
  const [signedTxn, setSignedTxn] = useState('');
  useEffect(() => {
    console.log('feeData: ' + args.feeData);
    console.log('args: ' + args);
    if (!isAddress(args.to) || !args.feeData?.['maxPriorityFeePerGas']) {
      return;
    }
    signTransaction(args).then(setSignedTxn);
  }, Object.values(args));
  return signedTxn;
};
