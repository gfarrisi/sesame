import styles from '@/styles/Home.module.css';
import { useState } from 'react';

interface RevealCardProps {
  revealId: RevealOptions;
  setRevealViewOption: (options: RevealOptions) => void;
  title: string;
  message: string;
}

export const RevealCard: React.FunctionComponent<
  React.PropsWithChildren<RevealCardProps>
> = (props) => {
  const { setRevealViewOption, title, message, revealId } = props;
  return (
    <div className={styles.reveal_options_card}>
      <h3>{title}</h3>
      <div style={{ height: 10 }} />
      <p>{message}</p>
      <div style={{ height: 20 }} />
      <button
        className={styles.button_white}
        onClick={() => setRevealViewOption(revealId)}
      >
        Reveal
      </button>
    </div>
  );
};

interface MenProps {
  setShowMenu: (show: boolean) => void;
}

type RevealOptions = 'overview' | 'seedPhrase' | 'privateKey';

export const Menu: React.FunctionComponent<
  React.PropsWithChildren<MenProps>
> = (props) => {
  const { setShowMenu } = props;
  const [revealViewOption, setRevealViewOption] =
    useState<RevealOptions>('overview');
  //   const { chain, setChain } = useNetwork();
  //   const [toAddress, setToAddress] = useState<string>('');

  return (
    <div style={{ padding: 10 }}>
      <div className={styles['flex-end']}>
        <button
          className={styles.button_unstyled}
          style={{ color: 'darkslategray' }}
          onClick={() => setShowMenu(false)}
        >
          Cancel
        </button>
      </div>

      {revealViewOption === 'overview' ? (
        <>
          <RevealCard
            revealId={'seedPhrase'}
            setRevealViewOption={setRevealViewOption}
            title={'Reveal Secret Recovery Phrase'}
            message={
              'If you ever change browsers or move computers you will need this Secret Recovery Phrase to access your accounts. Save them somewhere safe and secret.'
            }
          />
          <div style={{ height: 20 }} />
          <RevealCard
            revealId={'privateKey'}
            setRevealViewOption={setRevealViewOption}
            title={'Show Private Keys'}
            message={
              'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.'
            }
          />
        </>
      ) : revealViewOption === 'seedPhrase' ? (
        <>
          <button
            className={styles.button_unstyled}
            style={{ color: 'darkslategray' }}
            onClick={() => setRevealViewOption('overview')}
          >
            reset
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.button_unstyled}
            style={{ color: 'darkslategray' }}
            onClick={() => setRevealViewOption('overview')}
          >
            reset
          </button>
        </>
      )}
    </div>
  );
};
