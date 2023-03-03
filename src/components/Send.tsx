import { Chain, chains } from '@/hooks/use-network';
import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { useWallet } from '../hooks/use-wallet';

interface SendeProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Send: React.FunctionComponent<
  React.PropsWithChildren<SendeProps>
> = (props) => {
  const [network, setNetwork] = useState<Chain>();
  const [toAddress, setToAddress] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [showDropDown, setShowDropDown] = useState<boolean>();
  const { setCurrentView } = props;
  const { address } = useWallet();

  console.log({ network, toAddress, amount });
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
          {network ? network.label : `Select your network`}
        </button>
        {showDropDown && (
          <ul className={styles['dropdown-menu']}>
            {chains.map((x, i) => {
              return (
                <li key={'chain' + i}>
                  <button
                    className={styles.button_transparent}
                    onClick={() => {
                      setNetwork(x);
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
          onChange={(e) => setAmount(parseFloat(e.currentTarget.value))}
        />
        <div className={styles['input-group-addon']}>{network?.symbol}</div>
      </div>
      <div style={{ padding: 20 }} className={styles['flex-end']} />
      <button className={styles.button_white}>Send</button>
    </div>
  );
};
