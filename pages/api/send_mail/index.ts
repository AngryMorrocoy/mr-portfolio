import type { NextApiRequest, NextApiResponse } from 'next';
import { parseRequestBodyIntoIFTTQueryData, sendMessage } from './utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res
      .status(404)
      .json({ error: 'You should only post to this route.' });
  }

  try {
    const emailBody = parseRequestBodyIntoIFTTQueryData(req.body);

    await sendMessage(emailBody);

    return res.status(200).json({ message: 'Successfuly sent message' });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
