import styles from '@/styles/Home.module.css';
import React from 'react';
import { Account, AccountDetails } from './Account';

interface LayoutProps {
  children: React.ReactElement;
  account_details: AccountDetails;
}

export const Layout: React.FunctionComponent<
  React.PropsWithChildren<LayoutProps>
> = (props) => {
  const { children, account_details } = props;
  return (
    <div className={styles.layout}>
      <div className={styles.layout_header}>
        <Account account_details={account_details} />
      </div>
      <div className={styles.layout_main}></div>
      {children}
    </div>
  );
};
