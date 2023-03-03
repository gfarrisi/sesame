import { chains } from '@/hooks/use-network';
import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import ReactDropdown from 'react-dropdown';
import { useWallet } from '../hooks/use-wallet';

interface SendeProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Send: React.FunctionComponent<
  React.PropsWithChildren<SendeProps>
> = (props) => {
  const [network, setNetwork] = useState<string>();
  const { setCurrentView } = props;
  const { address } = useWallet();

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
      <p>To:</p>
      <div style={{ padding: 5 }} />
      <input className={styles.input} />
      <div style={{ padding: 10 }} />
      <p>Amount:</p>
      <div style={{ padding: 5 }} />
      <input className={styles.input} />
      <div style={{ padding: 20 }} />
      <ReactDropdown
        baseClassName={styles.dropdown}
        controlClassName={styles.dropdown_control}
        menuClassName={styles.dropdown_menu}
        placeholderClassName={styles.dropdown_placeholder}
        className={styles.dropdown}
        options={chains.map((x) => {
          return { label: x.label, value: x.name };
        })}
        onChange={(e) => console.log({ e })}
        value={network}
        placeholder="Select an option"
      />
      {/* <button className={styles.button}>Send</button> */}
    </div>
  );
};
