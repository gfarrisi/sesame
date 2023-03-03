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
      <input className={styles.input} />
    </div>
  );
};
