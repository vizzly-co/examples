import * as VizzLib from "@vizzly/components";

// DO NOT DO THIS IN YOUR APP!
// This is for example purposes only.
// Instead, you should store this securely.
const PRIVATE_KEY = `
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIDQEXmLnEhJDS7ZYOBiyrOJlzoMQI4vjzZE2oWPT/i76oAoGCCqGSM49
AwEHoUQDQgAETLhnTfzsUjAS6xrM3GVoJwnynY5f5LheNsZuz0a0kim46TZ7ROAl
KuSNl0PXSeq5N/iZqHv7CGShiS3EMoJA4w==
-----END EC PRIVATE KEY-----
`;

const VIZZLY_QUERY_TTL = 60;

export default async function handler(req, res) {
  const vizzAuth = VizzLib.auth({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: VIZZLY_QUERY_TTL,
  });

  /*
    The authentication rule for this app, is that the current user
    can only access data for companies that start with the letter A.

    It's more common to see a secure filter, such as that ensuring the 
    ID of the user originated from your servers. For example:

      const field = "user_id";
      const operator = "=";
      const value = "user_id_1234567";
      let regionSecuredFilter = await vizzAuth.signFilter({
        field,
        op: operator,
        value,
      });

    This secure filter will ensure that the user can only see data where
    the `user_id` field exactly matches `user_id_1234567`. In this way,
    we can offer multi-tenancy.
  */
  const field = "name";
  const operator = "starts_with";
  const value = "A";
  let regionSecuredFilter = await vizzAuth.signFilter({
    field,
    op: operator,
    value,
  });

  res.status(200).json({ secureFilters: [regionSecuredFilter] });
}
