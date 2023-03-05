import { providers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChainId } from '../../hooks/use-network';
import { providersByChainId } from './../../hooks/use-balance';

const pickProvider = (chainId: ChainId): providers.JsonRpcProvider => {
  return providersByChainId[chainId];
};
const handler = async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
  const message = req.body.Body;
  const sender = req.body.From;
  const [chainId, signedTxn] = message.split(',') as [string, string];

  const provider = pickProvider(Number(chainId) as ChainId);

  const transactionResponse = await provider
    .sendTransaction(signedTxn)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
    });

  res.send(true);
};

// Function to check if a message is a valid Ethereum signed message
// function isValidEthereumMessage(message: string): boolean {
//   // Check if the message starts with the Ethereum signature prefix
//   return message.startsWith('\u0019Ethereum Signed Message:');
// }

// Function to combine a message that was split into multiple SMS messages
function combineMultiPartMessage(message: string): string {
  // Check if the message is split into multiple parts
  const parts = message.split(/\n\s*/);

  if (parts.length > 1) {
    // Combine the parts into a single message
    const fullMessage = parts.slice(1).join('');
    return fullMessage;
  } else {
    // If the message is not split, return the original message
    return message;
  }
}

export default handler;
