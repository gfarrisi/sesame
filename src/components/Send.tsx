import { chains, useNetwork } from '@/hooks/use-network';
import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { utils } from 'ethers';
import { useState } from 'react';
import { useFeeData } from '../hooks/use-fee-data';
import { useNonce } from '../hooks/use-nonce';
import { useSignedTxn } from '../hooks/use-signed-txn';
import { useWallet } from '../hooks/use-wallet';

interface SendeProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Send: React.FunctionComponent<
  React.PropsWithChildren<SendeProps>
> = (props) => {
  const { chain, setChain } = useNetwork();
  const [toAddress, setToAddress] = useState<string>('');
  const [etherAmount, setEtherAmount] = useState<string>('0');
  const [showDropDown, setShowDropDown] = useState<boolean>();
  const { setCurrentView } = props;
  const { address, privateKey } = useWallet();
  const feeData = useFeeData();
  const nonce = useNonce();
  const signedTxn = useSignedTxn({
    nonce,
    to: toAddress,
    privateKey,
    chainId: chain.chain_id,
    value: utils.parseEther(etherAmount.toString()),
    feeData,
  });
  return (
    <div style={{ padding: 10 }}>
      <div className={styles['flex-end']}>
        <button
          className={styles.button_unstyled}
          onClick={() => setCurrentView('overview')}
        >
          Cancel
        </button>
      </div>
      <div className={styles.dropdown}>
        <button
          className={styles['dropdown-button']}
          onClick={() => setShowDropDown(!showDropDown)}
        >
          {chain.label}
        </button>
        {showDropDown && (
          <ul className={styles['dropdown-menu']}>
            {chains.map((x, i) => {
              return (
                <li key={'chain' + i}>
                  <button
                    className={styles.button_transparent}
                    onClick={() => {
                      setChain(x.name);
                      setShowDropDown(false);
                    }}
                  >
                    {x.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div style={{ padding: 20 }} />
      <p>To:</p>
      <div style={{ padding: 5 }} />
      <input
        className={styles.input}
        onChange={(e) => setToAddress(e.currentTarget.value)}
      />
      <div style={{ padding: 10 }} />
      <p>Amount:</p>
      <div style={{ padding: 5 }} />
      <div className={styles['input-group']}>
        <input
          className={styles.input}
          type="number"
          onChange={(e) => setEtherAmount(e.currentTarget.value)}
        />
        <div className={styles['input-group-addon']}>{chain.symbol}</div>
      </div>
      <div style={{ padding: 20 }} className={styles['flex-end']} />
      <a href={signedTxn}>
        <button
          className={styles.button_white}
          disabled={!toAddress || etherAmount === '0'}
        >
          Send
        </button>
      </a>
    </div>
  );
};
