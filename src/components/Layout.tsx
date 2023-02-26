import styles from '@/styles/Home.module.css';
import React from 'react';
import { Account } from './Account';

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout: React.FunctionComponent<
  React.PropsWithChildren<LayoutProps>
> = (props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <div className={styles.layout_header}>
        <Account
          account_details={{
            name: 'Account 1',
            avatar:
              'https://pbs.twimg.com/profile_images/1555669975712632832/JKWnOE1c_400x400.jpg',
          }}
        />
      </div>
      <div className={styles.layout_main}></div>
      {children}
    </div>
  );
};
