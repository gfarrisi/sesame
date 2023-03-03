import type { TransactionRequest } from '@ethersproject/abstract-provider';
import { BigNumber, Wallet } from 'ethers';

export const formatUSD = (dollarValue: number) => {
  return dollarValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatAddress = (address: string, length: number) => {
  const lengthToTrim = length || 4;
  return `${address.substring(0, lengthToTrim)}...${address.substring(
    address.length - lengthToTrim,
    address.length,
  )}`;
};

interface SignTransactionArgs {
  to: string;
  privateKey: string;
  chainId: number;
  value: BigNumber;
}
const phoneNumber = '+14072144335';
type Transaction = TransactionRequest & { chainId: number };
export const signTransaction = async (args: SignTransactionArgs) => {
  const { privateKey, chainId, value, to } = args;
  const wallet = new Wallet(privateKey);
  console.log(wallet);
  const tx: Transaction = {
    to,
    value,
    chainId,
  };

  // Signing a transaction
  const signedTxn = await wallet.signTransaction(tx);
  console.log(signedTxn);
  const textBody = encodeURIComponent(`${chainId},${signedTxn}`);
  const isMac = navigator.userAgent.includes('AppleWebKit');
  const isIphone = navigator.userAgent.match(/iPhone/i);
  if (isMac || isIphone) {
    return window.open('sms://' + phoneNumber + `/&body=${textBody}`);
  }
  if (navigator.userAgent.match(/Android/i)) {
    return alert(`${navigator.userAgent} not supported`);
    // window.open('sms://' + phoneNumber + '/');
  }
};
