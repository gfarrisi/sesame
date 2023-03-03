import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { useWallet } from '../hooks/use-wallet';
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
      <button
        className={styles.button_unstyled}
        onClick={() => setCurrentView('overview')}
      >
        ← Back
      </button>
      <p>From:</p>
      <div style={{ padding: 5 }} />
      <p>{address}</p>
      <div style={{ padding: 20 }} />
      <p>To:</p>
      <div style={{ padding: 5 }} />
      <input className={styles.input} />
      <div style={{ padding: 10 }} />
      <p>Amount:</p>
      <div style={{ padding: 5 }} />
      <input className={styles.input} />
      <div style={{ padding: 20 }} />
      <button className={styles.button}>Send</button>
    </div>
  );
};
