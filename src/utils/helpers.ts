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

export interface SignTransactionArgs {
  to: string;
  privateKey: string;
  chainId: number;
  value: BigNumber;
  nonce: number;
  feeData: any;
}
const phoneNumber = '+14072144335';
type Transaction = TransactionRequest & { chainId: number };
export const signTransaction = async (
  args: SignTransactionArgs,
): Promise<string> => {
  const { privateKey, chainId, value, to, nonce, feeData } = args;
  const wallet = new Wallet(privateKey);
  const maxPriorityFeePerGas = feeData['maxPriorityFeePerGas']; // Recommended maxPriorityFeePerGas
  const maxFeePerGas = feeData['maxFeePerGas']; // Recommended maxFeePerGas

  if (!maxFeePerGas || !maxPriorityFeePerGas) {
    alert('gas estimate data missing');
    return '';
  }

  const tx: Transaction = {
    nonce,

    to,
    type: 2 /** EIP-1559 */,
    maxPriorityFeePerGas, // Recommended maxPriorityFeePerGas
    maxFeePerGas, // Recommended maxFeePerGas
    gasLimit: 21_000,
    value,
    chainId,
  };

  // Signing a transaction
  const signedTxn = await wallet.signTransaction(tx);
  const textBody = encodeURIComponent(`${chainId},${signedTxn}`);
  const isMac: boolean = navigator.userAgent.includes('AppleWebKit');
  const isIphone: boolean = navigator.userAgent.includes('iPhone');
  if (isMac || isIphone) {
    return 'sms://' + phoneNumber + `/&body=${textBody}`;
  }
  if (navigator.userAgent.match(/Android/i)) {
    alert(`${navigator.userAgent} not supported`);
    return '';
    // window.open('sms://' + phoneNumber + '/');
  }
  return '';
};
