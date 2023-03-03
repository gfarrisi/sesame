import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import React from 'react';
import { useBalance } from '../hooks/use-balance';
import { formatUSD } from '../utils/helpers';

interface SendReceiveProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const SendReceive: React.FunctionComponent<
  React.PropsWithChildren<SendReceiveProps>
> = (props) => {
  const { setCurrentView } = props;
  return (
    <div className={styles.align_center}>
      <button className={styles.button} onClick={() => setCurrentView('send')}>
        Send
      </button>
      <div style={{ paddingLeft: 40 }} />
      <button
        className={styles.button}
        onClick={() => setCurrentView('receive')}
      >
        Receive
      </button>
    </div>
  );
};

interface BalanceCardProps {
  data: {
    currency_name: string;
    currency_img_url: string;
    currency_balance: number;
    currency_value_usd: number;
  };
}

export const BalanceCard: React.FunctionComponent<
  React.PropsWithChildren<BalanceCardProps>
> = (props) => {
  const { data } = props;
  const balance = useBalance();
  return (
    <div className={styles.balance_card}>
      <div className={styles.align_center}>
        <Image
          src={data.currency_img_url}
          width={40}
          height={40}
          alt={data.currency_name + 'img'}
          className={styles.avatar}
        />
        <div style={{ paddingLeft: 10 }}>
          <p>{data.currency_name}</p>
          <h2>{balance}</h2>
        </div>
      </div>
      <h2>{formatUSD(data.currency_value_usd)}</h2>
    </div>
  );
};

interface OverviewProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
}

export const Overview: React.FunctionComponent<
  React.PropsWithChildren<OverviewProps>
> = (props) => {
  const { setCurrentView } = props;
  return (
    <div style={{ paddingTop: 30 }}>
      <SendReceive setCurrentView={setCurrentView} />
      <BalanceCard
        data={{
          currency_name: 'ETH',
          currency_balance: 1,
          currency_img_url:
            'https://pbs.twimg.com/profile_images/1575128551501664256/5r5jfk2K_400x400.jpg',
          currency_value_usd: 1614.3,
        }}
      />
    </div>
  );
};
