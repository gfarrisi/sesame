import * as CryptoJS from 'crypto-js';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const DEFAULT_PASSWORD = 'default-password';
function makeWallet(): WalletData {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic,
  };
}
const WALLET_DATA_KEY = 'sesame-wallet-data';
interface WalletData {
  address: string;
  privateKey: string;
  mnemonic: ethers.utils.Mnemonic;
}
export const useWallet = (password = DEFAULT_PASSWORD) => {
  const [address, setAddress] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [mnemonic, setMnemonic] = useState<ethers.utils.Mnemonic>(
    {} as ethers.utils.Mnemonic,
  );

  useEffect(() => {
    const storedData = localStorage.getItem(WALLET_DATA_KEY);
    if (storedData) {
      const decryptedData = CryptoJS.AES.decrypt(storedData, password).toString(
        CryptoJS.enc.Utf8,
      );
      const decodedWalletData = JSON.parse(decryptedData) as WalletData;

      setAddress(decodedWalletData.address);
      setPrivateKey(decodedWalletData.privateKey);
      setMnemonic(decodedWalletData.mnemonic);
    } else {
      const walletData = makeWallet();
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(walletData),
        password,
      ).toString();
      localStorage.setItem(WALLET_DATA_KEY, encryptedData);
      setAddress(walletData.address);
      setPrivateKey(walletData.privateKey);
      setMnemonic(walletData.mnemonic);
    }
  }, []);

  console.log({ address });
  return {
    address,
    privateKey,
    mnemonic,
  };
};
