import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const isOnlineAtom = atom(true);
export const useIsOnline = () => {
  const [online, setOnline] = useAtom(isOnlineAtom);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};
