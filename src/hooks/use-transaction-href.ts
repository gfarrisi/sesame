import { Transaction, Wallet } from 'ethers';
import { useEffect, useState } from 'react';
import { providers } from './use-balance';
import { Chain } from './use-network';
import { useWallet } from './use-wallet';

type UseTransactionHrefArgs = { to: string; value: string; network: Chain };
export const useTransactionHref = (args: UseTransactionHrefArgs): string => {
  const { value, to, network } = args;
  const [nonce, setNonce] = useState(0);
  const [feeData, setFeeData] = useState<any>({});
  const { address, privateKey } = useWallet();

  useEffect(() => {
    const p = async () => {
      const [_feeData, _nonce] = await Promise.all([
        providers.goerli.getFeeData(),
        providers.goerli.getTransactionCount(address),
      ]);
      setFeeData(_feeData);
      setNonce(_nonce);
    };
    p();
  }, []);

  //   return generateSMSHref({
  //     to,
  //     privateKey,
  //     chainId: network.chain_id,
  //     value: utils.parseEther(value.toString()),
  //     feeData,
  //     nonce,
  //   });
  const wallet = new Wallet(privateKey);
  console.log(wallet);
  const maxPriorityFeePerGas = feeData['maxPriorityFeePerGas']; // Recommended maxPriorityFeePerGas
  const maxFeePerGas = feeData['maxFeePerGas']; // Recommended maxFeePerGas

  if (!maxFeePerGas || !maxPriorityFeePerGas) {
    alert('gas estimate data missing');
    throw new Error('gas estimate data missing');
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
  alert('isMac? ' + isMac);
  alert('isIphone? ' + isMac);
  if (isMac || isIphone) {
    return 'sms://' + phoneNumber + `/&body=${textBody}`;
  }
  if (navigator.userAgent.match(/Android/i)) {
    const errorMessage = `${navigator.userAgent} not supported`;
    alert(errorMessage);
    throw new Error(errorMessage);
    // window.open('sms://' + phoneNumber + '/');
  }
  return '';
};
