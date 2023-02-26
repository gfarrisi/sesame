import styles from '@/styles/Home.module.css';
import Image from 'next/image';
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
  return (
    <div>
      <div className={styles.account_header}>
        <Image
          src={account_details.avatar}
          width={35}
          height={35}
          alt="avatar"
          className={styles.avatar}
        />
        <div>
          <h2>{account_details.name}</h2>
        </div>
        <div></div>
      </div>
      {/* <h2>{account_details.balance}ETH</h2> */}
    </div>
  );
};
