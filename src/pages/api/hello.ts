import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<boolean>,
) {
  const message = req.body.Body;
  const sender = req.body.From;
  console.log({ body: req.body, message, sender });

  if (isValidEthereumMessage(message)) {
    const fullMessage = combineMultiPartMessage(message);

    console.log(
      `Received signed Ethereum message from ${sender}: ${fullMessage}`,
    );
  } else {
    // Handle invalid messages
    console.log(`Received invalid message from ${sender}: "${message}"`);
  }

  res.send(true);
}

// Function to check if a message is a valid Ethereum signed message
function isValidEthereumMessage(message: string): boolean {
  // Check if the message starts with the Ethereum signature prefix
  return message.startsWith('\u0019Ethereum Signed Message:');
}

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
