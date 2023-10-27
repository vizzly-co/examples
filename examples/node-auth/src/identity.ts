import * as fs from 'fs';
import * as VizzlyAuth from '@vizzly/auth';

const TTL_IN_MINUTES = 120;

const generateVizzlyAccessTokens = async (privateKey: string, ttlInMinutes: number) => {
  const vizzlySigner = VizzlyAuth.createSigner({ ttlInMinutes, privateKey })

  // Create a token that is used for dashboard access.
  const dashboardAccessToken = await vizzlySigner.signDashboardAccessToken({
    // Is the user a standard user, or should they have 'admin'
    // access allowing them to manage the dashboard for ALL your users.
    accessType: 'standard',

    // What is the ID of your project?
    // You can find this on the project details page. It will start with `prj_`
    projectId: '<< Your project ID >>',

    // A unique identifier for the current user, that you are
    // happy for Vizzly to store.
    userReference: '<< A reference to the current user >>',

    // Either `read` or `read_write`
    scope: 'read_write'
  });

  // Create a token that is used for data access in a multi-tenant environment.
  const dataAccessToken = await vizzlySigner.signDataAccessToken({
    // What is the ID of your project?
    // You can find this on the project details page. It will start with `prj_`
    projectId: '<< Your project ID >>',

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
  });

  // Generate an access token for the Vizzly Config Manager
  const queryEngineAccessToken = await vizzlySigner.signQueryEngineAccessToken({
    // What is the ID of your project?
    // You can find this on the project details page. It will start with `prj_`
    projectId: '<< Your project ID >>',

    // Allow the user access to the database schema. This is required if you want the
    // user to access the Vizzly Config Manager.
    allowDatabaseSchemaAccess: true,

    // Allow the user to fetch 'preview' data from the database when
    // configuring the datasets for the Vizzly Query Engine.
    allowDataPreviewAccess: true,
  });

  return {
    dataAccessToken,
    dashboardAccessToken,
    queryEngineAccessToken
  }
};

export const getIdentityTokens = () => {
  const privateKey = fs.readFileSync("../../example-key-pairs/vizzly-private.pem").toString();

  return generateVizzlyAccessTokens(privateKey, TTL_IN_MINUTES);
};