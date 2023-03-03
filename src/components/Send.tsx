import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { useWallet } from '../hooks/use-wallet';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <select>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

interface SendeProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Send: React.FunctionComponent<
  React.PropsWithChildren<SendeProps>
> = (props) => {
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
      <Dropdown />
      <button className={styles.button}>Send</button>
    </div>
  );
};
