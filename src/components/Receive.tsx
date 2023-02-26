import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { colors } from '@/styles/themes';
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
      <button
        className={styles.button}
        onClick={() => setCurrentView('overview')}
      >
        ← Back
      </button>
      <div className={styles.center}>
        <QRCode value={address} size={256} />
        <div className={styles.spacer} />
        <div className={styles.spacer} />
        <h4 style={{ color: colors.gray500 }}>{formatAddress(address, 6)}</h4>
      </div>
    </div>
  );
};
