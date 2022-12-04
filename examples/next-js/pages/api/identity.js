// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as VizzlyAuth from "@vizzly/auth";

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

const getUserReference = (req) => {
  let type = "custom";
  if (req.headers["referer"].endsWith("/custom")) type = "custom";
  if (req.headers["referer"].endsWith("/in-browser")) type = "in-browser";
  if (req.headers["referer"].endsWith("docker-image")) type = "docker-image";

  return `usr 12345 - ${type}`;
};

const accessType = () => "editor";

const IDENTITY_TTL = 120;

/*
  Receives HTTP requests, and responds with the user's
  identity information.
*/
export default async function handler(req, res) {
  const vizzAuth = VizzlyAuth.createSigner({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: IDENTITY_TTL,
  });

  let identityConfig = {
    userReference: getUserReference(req),
    accessType: accessType(),
    dataSetIds: "*",
    secureFilters: {},
    organisationId: "org_9817c013a80944cea5890df34ab792cd",
    dashboardId: "dsh_42496c1c55e24bd985dc71bdc4a85f9d",
  };

  const tokens = await vizzAuth.generateTokens(identityConfig);

  res.status(200).json(tokens);
}
