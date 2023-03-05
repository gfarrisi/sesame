import { Layout } from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { Overview } from '../components/Overview';
import { Receive } from '../components/Receive';
import { Send } from '../components/Send';

export type ViewNames = 'overview' | 'send' | 'receive';
export default function Home() {
  const [currentView, setCurrentView] = useState<ViewNames>('overview');

  const account_details = {
    name: 'Account 1',
    avatar:
      'https://pbs.twimg.com/profile_images/1555669975712632832/JKWnOE1c_400x400.jpg',
    balance: 10,
  };
  return (
    <>
      <Head>
        <title>Sesame</title>
        <meta name="description" content="SMS Send Eth to Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout account_details={account_details}>
          <div>
            {currentView === 'overview' ? (
              <Overview setCurrentView={setCurrentView} />
            ) : null}
            {currentView === 'send' ? (
              <Send setCurrentView={setCurrentView} />
            ) : null}
            {currentView === 'receive' ? (
              <Receive setCurrentView={setCurrentView} />
            ) : null}
          </div>
        </Layout>
      </main>
    </>
  );
}
