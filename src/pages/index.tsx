import { Layout } from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import { Overview } from '../components/Overview';
import { Receive } from '../components/Receive';
import { Send } from '../components/Send';

const inter = Inter({ subsets: ['latin'] });

export type ViewNames = 'overview' | 'send' | 'receive';
export default function Home() {
  const [currentView, setCurrentView] = useState<ViewNames>('overview');

  return (
    <>
      <Head>
        <title>Sesame</title>
        <meta name="description" content="SMS Send Eth to Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
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
