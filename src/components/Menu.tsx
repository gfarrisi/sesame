import { useWallet } from '@/hooks/use-wallet';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

interface BackTitleProps {
  title: string;
  onBack: any;
}

export const BackTitle: React.FunctionComponent<
  React.PropsWithChildren<BackTitleProps>
> = (props) => {
  const { title, onBack } = props;

  return (
    <button
      className={styles.button_unstyled}
      style={{ padding: 0 }}
      onClick={() => onBack()}
    >
      <div className={styles.flex}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="16"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill="#2c2a3f"
            d="M 283.609375 361.796875 C 293.753906 351.644531 293.753906 335.179688 283.609375 325.023438 L 146.125 187.382812 L 283.609375 49.746094 C 293.753906 39.589844 293.753906 23.125 283.609375 12.96875 C 273.46875 2.816406 257.019531 2.816406 246.875 12.96875 L 91.023438 168.996094 C 80.878906 179.152344 80.878906 195.617188 91.023438 205.773438 L 246.875 361.796875 C 257.019531 371.953125 273.46875 371.953125 283.609375 361.796875 Z M 283.609375 361.796875 "
            fill-opacity="1"
            fill-rule="evenodd"
          />
        </svg>
        <div style={{ width: 5 }} />
        <h3>{title}</h3>
      </div>
    </button>
  );
};

interface RevealProps {
  revealViewOption: RevealOptions;
  setRevealViewOption: (option: RevealOptions) => void;
}

export const Reveal: React.FunctionComponent<
  React.PropsWithChildren<RevealProps>
> = (props) => {
  const { revealViewOption, setRevealViewOption } = props;
  const { privateKey, mnemonic } = useWallet();
  console.log({ privateKey, mnemonic, revealViewOption });

  const title =
    revealViewOption === 'seedPhrase'
      ? 'Secret Recovery Phrase'
      : 'Private Keys';

  return (
    <>
      <BackTitle title={title} onBack={() => setRevealViewOption('overview')} />
      <div style={{ height: 15 }} />
      <div className={styles.reveal_options_card}>
        {revealViewOption === 'seedPhrase' ? (
          <>
            <p>{mnemonic?.phrase}</p>
          </>
        ) : (
          <>
            <p>{privateKey}</p>
          </>
        )}
      </div>
    </>
  );
};
interface RevealCardProps {
  revealViewOption: RevealOptions;
  setRevealViewOption: (options: RevealOptions) => void;
  title: string;
  message: string;
}

export const RevealCard: React.FunctionComponent<
  React.PropsWithChildren<RevealCardProps>
> = (props) => {
  const { setRevealViewOption, title, message, revealViewOption } = props;
  return (
    <div className={styles.reveal_options_card}>
      <h3>{title}</h3>
      <div style={{ height: 10 }} />
      <p style={{ lineHeight: 1.3 }}>{message}</p>
      <div style={{ height: 20 }} />
      <button
        className={styles.button_unstyled}
        style={{ color: '#ff6699', fontWeight: 600, fontSize: 18, padding: 0 }}
        onClick={() => setRevealViewOption(revealViewOption)}
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

  return (
    <div style={{ padding: 10 }}>
      {revealViewOption === 'overview' ? (
        <>
          <RevealCard
            revealViewOption={'seedPhrase'}
            setRevealViewOption={setRevealViewOption}
            title={'Reveal Secret Recovery Phrase'}
            message={
              'If you ever change browsers or move computers you will need this Secret Recovery Phrase to access your accounts. Save them somewhere safe and secret.'
            }
          />
          <div style={{ height: 20 }} />
          <RevealCard
            revealViewOption={'privateKey'}
            setRevealViewOption={setRevealViewOption}
            title={'Show Private Keys'}
            message={
              'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.'
            }
          />
        </>
      ) : (
        <>
          <Reveal
            revealViewOption={revealViewOption}
            setRevealViewOption={setRevealViewOption}
          />
        </>
      )}
    </div>
  );
};
