import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { colors } from '@/styles/themes';
import { formatAddress } from '@/utils/helpers';
import QRCode from 'qrcode.react';
import { AccountDetails } from './Account';

interface ReceiveProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
  account_details: AccountDetails;
}

export const Receive: React.FunctionComponent<
  React.PropsWithChildren<ReceiveProps>
> = (props) => {
  const { setCurrentView, account_details } = props;

  return (
    <div style={{ padding: 10 }}>
      <button
        className={styles.button}
        onClick={() => setCurrentView('overview')}
      >
        ← Back
      </button>
      <div className={styles.center}>
        <QRCode value={account_details.address} size={256} />
        <div className={styles.spacer} />
        <div className={styles.spacer} />
        <h4 style={{ color: colors.gray500 }}>
          {formatAddress(account_details.address, 6)}
        </h4>
      </div>
    </div>
  );
};
