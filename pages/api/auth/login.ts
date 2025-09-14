import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password, timestamp, csrfToken } = req.body;

  const delay = Math.random() * 500 + 300;

  setTimeout(() => {
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      code: 'INVALID_CREDENTIALS',
      timestamp: Date.now()
    });
  }, delay);
}