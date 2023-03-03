import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import React from 'react';
import { useBalance } from '../hooks/use-balance';

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
    networkName: 'mainnet' | 'goerli';
    currency_name: string;
    currency_img_url: string;
  };
}

export const BalanceCard: React.FunctionComponent<
  React.PropsWithChildren<BalanceCardProps>
> = (props) => {
  const { data } = props;
  const balance = useBalance(data.networkName);
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
      </div>
      <div style={{ paddingLeft: 10, textAlign: 'right' }}>
        <h2>{balance}</h2>
        <p>{data.currency_name}</p>
      </div>
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
          networkName: 'mainnet',
          currency_name: 'ETH',
          currency_img_url:
            'https://pbs.twimg.com/profile_images/1575128551501664256/5r5jfk2K_400x400.jpg',
        }}
      />
      <BalanceCard
        data={{
          networkName: 'goerli',
          currency_name: 'Goerli ETH',
          currency_img_url:
            'https://assets.coingecko.com/coins/images/29217/large/goerli-eth.png?1677429831',
        }}
      />
    </div>
  );
};
