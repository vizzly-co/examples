import * as fs from 'fs';
import { createSigner } from '@vizzly/auth';

const TTL_IN_MINUTES = 120;

export const getIdentityTokens = async () => {
  const privateKey = fs.readFileSync("../../example-key-pairs/vizzly-private.pem").toString();
  
  const signer = createSigner({ ttlInMinutes: TTL_IN_MINUTES, privateKey })

  return await signer.generateTokens({
    // What data sets does this user have access too?
    // If can either be a list of data set IDs, or a "*" to allow
    // access to all data sets.
    dataSetIds: ["hr-payroll-data", "hr-people-data"],

    // What secure filters need to be added, to ensure this user
    // only sees their own data?
    secureFilters: {},

    // Is the user a standard user, or should they have 'admin'
    // access allowing them to manage the dashboard for ALL your users.
    accessType: 'standard',

    // What is your organisation ID? Find yours on
    // https://app.vizzly.co/dashboards
    organisationId: 'org_12345',

    // Which dashboard template should be used? Find yours on
    // https://app.vizzly.co/dashboards
    dashboardId: 'dsh_12345',

    // A unique identifier for the current user, that you are
    // happy for Vizzly to store.
    userReference: '<< a reference to the current user >>',

    // Allow the user to view and make changes to the dashboard.
    scope: 'read_write'
  });
};