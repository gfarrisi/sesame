import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';

interface ReceiveProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Receive: React.FunctionComponent<
  React.PropsWithChildren<ReceiveProps>
> = (props) => {
  const { setCurrentView } = props;
  return (
    <div className={styles.align_center}>
      <button
        className={styles.button}
        onClick={() => setCurrentView('overview')}
      >
        ← Back
      </button>
    </div>
  );
};
