import type { TransactionRequest } from '@ethersproject/abstract-provider';
import { BigNumber, Wallet } from 'ethers';
import { providers } from '../hooks/use-balance';

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
  let feeData = await providers.goerli.getFeeData();
  const maxPriorityFeePerGas = feeData['maxPriorityFeePerGas']; // Recommended maxPriorityFeePerGas
  const maxFeePerGas = feeData['maxFeePerGas']; // Recommended maxFeePerGas

  if (!maxFeePerGas || !maxPriorityFeePerGas) {
    alert('gas estimate data missing');
    return;
  }

  const nonce = await providers.goerli.getTransactionCount(
    '0x3E32f173752B54C8023b70860562C106D0a7102C',
  );
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
