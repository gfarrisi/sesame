import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { formatAddress } from '@/utils/helpers';
import QRCode from 'qrcode.react';
import { useWallet } from '../hooks/use-wallet';

interface ReceiveProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Receive: React.FunctionComponent<
  React.PropsWithChildren<ReceiveProps>
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
      <div className={styles.center}>
        <QRCode
          value={address}
          size={266}
          style={{ borderRadius: 5, backgroundColor: 'white', padding: 10 }}
        />
      </div>
      <div className={styles.spacer} />
      <div className={styles.spacer} />
      <div className={styles.center}>
        <h4 style={{ color: 'black' }}>{formatAddress(address, 6)}</h4>
      </div>
    </div>
  );
};
