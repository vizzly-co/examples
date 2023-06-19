import type { NextApiRequest, NextApiResponse } from 'next';
import { createSigner, IdentityConfig } from '@vizzly/auth';
import fs from 'fs';
import * as User from '../../models/User';

// The ID of my Vizzly organisation
const ORGANISATION_ID = '<< YOUR VIZZLY ORGANISATION ID >>';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Authenticate the user. This logic is specific to your application.
  const sessionToken = req.cookies['demo_session'];
  if(sessionToken){
    const user = await User.getUserFromSession(sessionToken as string);

    // TTL of the access tokens needed for the dashboard to fetch
    // the configuration, and run queries against the DB.
    const ttlInMinutes = 120;

    // Load the private key from somewhere on your server.
    const privateKey = fs.readFileSync('<< PATH TO YOUR PRIVATE KEY >>').toString();

    // Create a Vizzly token signer.
    const signer = createSigner({privateKey, ttlInMinutes});

    const identityConfig: IdentityConfig = {
      dataSetIds: ['data_set_1', 'data_set_2'],
      // Filters to keep data secured in a multi-tenant environment
      secureFilters: {},
      // Is the user a trusted, admin of the dashboard?
      accessType: user.isAdmin ? 'admin' : 'standard',
      // Your Vizzly organisation ID
      organisationId: ORGANISATION_ID,
      // read or read_write permissions.
      scope: 'read_write',
      // Unique reference to the current user, so Vizzly can keep
      // track of which dashboards belong to which users.
      userReference: user.id
    };

    // Create the access tokens from a Vizzly identity config.
    const accessTokens = await signer.generateTokens(identityConfig)

    // Return the access tokens for the authenticated user.
    res.status(200).json(accessTokens);
  } else {
    res.status(403).json({message: "Please sign in."});
  };
}
