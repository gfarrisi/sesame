import { ViewNames } from '@/pages';
import styles from '@/styles/Home.module.css';
import { colors } from '@/styles/themes';
import { formatAddress } from '@/utils/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AccountDetails } from './Account';

async function generateQRCode(address: string): Promise<string> {
  // Calculate the QR code data using the address string
  const qrData = encodeURI(address);
  const qrVersion = 10; // Set the QR code version (larger versions can store more data)
  const qrSize = 4 * qrVersion + 7; // Calculate the size of the QR code
  const qrPadding = 2; // Set the amount of padding to add around the QR code

  // Construct the QR code API URL
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrData}`;

  // Fetch the QR code image data
  const response = await fetch(apiUrl);
  const imageData = await response.blob();

  // Create a data URL from the image data
  const reader = new FileReader();
  const dataUrlPromise = new Promise<string>((resolve, reject) => {
    reader.onload = () => {
      const dataUrl = reader.result as string;
      resolve(dataUrl);
    };
    reader.onerror = reject;
  });
  reader.readAsDataURL(imageData);
  const dataUrl = await dataUrlPromise;

  // Return the data URL of the QR code
  return dataUrl;
}
async function generateQRCode2(address: string): Promise<string> {
  // Create a canvas element and get its 2D context
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Could not get 2D context for canvas');
  }

  // Calculate the QR code data using the address string
  const qrData = encodeURI(address);
  const qrVersion = 10; // Set the QR code version (larger versions can store more data)
  const qrSize = 4 * qrVersion + 17; // Calculate the size of the QR code
  const qrPadding = 2; // Set the amount of padding to add around the QR code

  // Set the canvas size to match the QR code size
  canvas.width = canvas.height = qrSize + 2 * qrPadding;

  // Draw the QR code on the canvas
  context.fillStyle = '#000000'; // Set the color to black
  for (let row = 0; row < qrSize; row++) {
    for (let col = 0; col < qrSize; col++) {
      if (getQRModule(qrData, qrVersion, row, col)) {
        context.fillRect((col + qrPadding) * 4, (row + qrPadding) * 4, 4, 4);
      }
    }
  }

  // Generate a data URI that includes the address as the text to copy
  const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(
    address,
  )}`;

  // Generate the final QR code that when scanned will copy the address text
  const qrCodeWithCopyTextDataUrl = canvas.toDataURL(dataUri);

  // Return the data URL of the QR code with the copy text
  return qrCodeWithCopyTextDataUrl;
}

function getQRModule(
  data: string,
  version: number,
  row: number,
  col: number,
): boolean {
  // Calculate the index of the module
  const index =
    version * version -
    (version - 1 - Math.floor(row / 2)) * (version - 1 - Math.floor(row / 2)) -
    (version - 1 - Math.floor(col / 2)) * 2 -
    (row % 2 === 0 ? col % 2 : (col + 1) % 2);

  // Check if the module is set
  if (index >= data.length) {
    return false;
  } else {
    return data.charAt(index) === '1';
  }
}
interface ReceiveProps {
  setCurrentView: React.Dispatch<React.SetStateAction<ViewNames>>;
  account_details: AccountDetails;
}

export const Receive: React.FunctionComponent<
  React.PropsWithChildren<ReceiveProps>
> = (props) => {
  const { setCurrentView, account_details } = props;
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    async function generateCode() {
      const dataUrl = await generateQRCode(account_details.address);
      setQrCodeDataUrl(dataUrl);
    }
    generateCode();
  }, [account_details.address]);

  console.log({ qrCodeDataUrl });

  return (
    <div style={{ padding: 10 }}>
      <button
        className={styles.button}
        onClick={() => setCurrentView('overview')}
      >
        ← Back
      </button>
      <div className={styles.center}>
        <Image
          src={qrCodeDataUrl}
          alt={`QR code for ${account_details.address}`}
          width={150}
          height={150}
        />
        <div className={styles.spacer} />
        <div className={styles.spacer} />
        <h4 style={{ color: colors.gray500 }}>
          {formatAddress(account_details.address, 6)}
        </h4>
      </div>
    </div>
  );
};
