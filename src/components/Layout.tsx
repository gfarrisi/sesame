import styles from '@/styles/Home.module.css';
import React, { useState } from 'react';
import { Account, AccountDetails } from './Account';
import { Menu } from './Menu';

interface LayoutProps {
  children: React.ReactElement;
  account_details: AccountDetails;
}

export const Layout: React.FunctionComponent<
  React.PropsWithChildren<LayoutProps>
> = (props) => {
  const { children, account_details } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={`${styles.layout}`}>
      <div className={styles.layout_header}>
        <Account
          account_details={account_details}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
      <div style={{ padding: 10 }}>
        {showMenu ? (
          <Menu setShowMenu={setShowMenu} />
        ) : (
          <>
            <div className={styles.layout_main}></div>
            {children}
          </>
        )}
      </div>
    </div>
  );
};
