import { useWallet } from '@/hooks/use-wallet';
import styles from '@/styles/Home.module.css';
import React from 'react';

export type AccountDetails = {
  avatar: string;
  name: string;
  balance?: number;
};

interface AccountProps {
  account_details: AccountDetails;
}

export const Account: React.FunctionComponent<
  React.PropsWithChildren<AccountProps>
> = (props) => {
  const { account_details } = props;
  const { address } = useWallet();

  return (
    <div>
      <div className={styles.account_header}>
        <svg viewBox="0 0 100 80" width="18" height="18">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <div>
          <h4>{`SESAME`}</h4>
          {/* <h4>{`${formatAddress(address, 4)}`}</h4> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};
