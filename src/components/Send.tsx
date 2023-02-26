import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';

interface SendProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Send: React.FunctionComponent<
  React.PropsWithChildren<SendProps>
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
