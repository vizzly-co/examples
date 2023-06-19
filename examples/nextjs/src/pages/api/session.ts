import * as User from '../../models/User';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const sessionToken = await User.signInUser(email, password);

  res
  .setHeader('Set-Cookie', `demo_session=${sessionToken}`)
  .status(200)
  .json({});
}
