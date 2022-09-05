// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth } from "@vizzly/components";

// DO NOT DO THIS IN YOUR APP!
// This is for example purposes only.
// Instead, you should store this securely.
const PRIVATE_KEY = `
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIMd64JFtp7nbYIsws03dy6fBirhpio4aLwPdW/6Xg1WRoAoGCCqGSM49
AwEHoUQDQgAERbmqmGHbjlNMXjHZMJsoFsDnQDT7k4aV5wBdlXIKe0GH+FWSwawt
c8XAMURwSA7iAY2QzmzJ4RQ6ZKp1UVkpLA==
-----END EC PRIVATE KEY-----
`;

const IDENTITY_TTL = 120;

/*
  Receives HTTP requests, and responds with the user's
  identity information.
*/
export default async function handler(req, res) {
  const vizzAuth = auth({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: IDENTITY_TTL,
  });

  // TODO securely collect this information.

  let identityConfig = {
    userReference: "usr_6789",
    organisationId: "org_7e58f56ceff84f80bc529b57f802d638",
    initialDashboard: "dsh_3c7cf8bdb724482ca71dd65e3bffd6c3",
  };

  identityConfig.integritySignature = await vizzAuth.signIdentityConfig(identityConfig);

  res.status(200).json(identityConfig);
}
