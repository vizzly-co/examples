// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Vizzly from '@vizzly/dashboard';

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
  const vizzAuth = Vizzly.auth({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: IDENTITY_TTL,
  });

  // TODO
  // Obtain a unique identifier for the current user,
  // which is used by Vizzly to store this user's dashboard configuration.
  let userReference = "usr-1"

  // TODO
  // Obtain your organisation ID and initial dashboard ID
  // from the Vizzly studio.
  let partialIdentityConfig = {
    userReference,
    dataSets: "*",
    // 'editor' or 'standard'
    userType: 'editor',
    organisationId: "org_9817c013a80944cea5890df34ab792cd",
    dashboardId: "dsh_48536a3992674c24a600e55de81638c1",
    secureFilters: {}
  };
  
  const {integritySignature, expires} = await vizzAuth.signIdentityConfig(partialIdentityConfig);

  const identityConfig = {...partialIdentityConfig, integritySignature, expires};
  
  res
  .status(200)
  .json(identityConfig);
}
