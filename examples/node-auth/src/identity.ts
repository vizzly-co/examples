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
    // only sees their own data? For example here, we set a filter
    // to only use data where the field `field_user_id` equals a
    // specific user ID. 
    secureFilters: {
      "hr-payroll-data": [{
        field: "field_user_id",
        op: "=",
        value: "<< the user's ID >>"
      }],
      "hr-people-data": [{
        field: "field_user_id",
        op: "=",
        value: "<< the user's ID >>"
      }],
    },

    // Is the user a standard user, or should they have 'admin'
    // access allowing them to manage the dashboard for ALL your users.
    accessType: 'standard',

    // What is your organisation ID? Find yours by running the CLI command
    // `vizzly current-profile`
    // or on the https://app.vizzly.co/dashboards page.
    organisationId: 'org_12345',

    // A unique identifier for the current user, that you are
    // happy for Vizzly to store.
    userReference: '<< a reference to the current user >>',

    // Allow the user to view and make changes to the dashboard.
    scope: 'read_write'
  });
};