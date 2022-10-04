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
/*
For reference, this is the public key that would be uploaded to Vizzly.

-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAERbmqmGHbjlNMXjHZMJsoFsDnQDT7
k4aV5wBdlXIKe0GH+FWSwawtc8XAMURwSA7iAY2QzmzJ4RQ6ZKp1UVkpLA==
-----END PUBLIC KEY-----
*/

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

  let userReference = "usr 123";

  let partialIdentityConfig = {
    userReference,
    userType: 'standard',
    dataSets: "*",
    secureFilters: {},
    organisationId: "org_7e58f56ceff84f80bc529b57f802d638",
    dashboardId: "dsh_3459495ccc584277aaa6accea3bcf989",
  };

  const {integritySignature, expires} = await vizzAuth.signIdentityConfig(partialIdentityConfig);

  const identityConfig = {...partialIdentityConfig, integritySignature, expires};
  
  res
  .status(200)
  .json({ identityConfig });
}
