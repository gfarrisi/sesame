import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

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
export const useWallet = () => {
  const [address, setAddress] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [mnemonic, setMnemonic] = useState<ethers.utils.Mnemonic>(
    {} as ethers.utils.Mnemonic,
  );

  useEffect(() => {
    const walletData = localStorage.getItem(WALLET_DATA_KEY);
    if (walletData) {
      const decodedWalletData = JSON.parse(walletData) as WalletData;
      setAddress(decodedWalletData.address);
      setPrivateKey(decodedWalletData.privateKey);
      setMnemonic(decodedWalletData.mnemonic);
    } else {
      const newWallet = makeWallet();
      localStorage.setItem(WALLET_DATA_KEY, JSON.stringify(newWallet));
      setAddress(newWallet.address);
      setPrivateKey(newWallet.privateKey);
      setMnemonic(newWallet.mnemonic);
    }
  }, []);

  return {
    address,
    privateKey,
    mnemonic,
  };
};
