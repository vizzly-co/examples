import * as VizzLib from "@vizzly/components";

// DO NOT DO THIS IN YOUR APP!
// This is for example purposes only.
// Instead, you should store this securely.
const PRIVATE_KEY = `
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIA0BNHNTsZ/LqUuiqs4pg60itVs3ASfPB5fcUKRKq3GNoAoGCCqGSM49
AwEHoUQDQgAEGiAeatkVJPojPZ6CU8d+WA3jUkRbw/3ezbKiAa1gFcSXlhXDgNrx
zKcAS3PCBAo/cyN6UVn6dILucbgCTQrpcA==
-----END EC PRIVATE KEY-----
`;

const VIZZLY_QUERY_TTL = 60;

export default async function handler(req, res) {
  // TODO authenticate the user, and ensure they're
  // allowed access to the Isly region data.

  const vizzAuth = VizzLib.auth({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: VIZZLY_QUERY_TTL,
  });

  const field = "Region";
  const operator = "=";
  const value = "Islay";
  let regionSecuredFilter = await vizzAuth.signFilter({
    field,
    operator,
    value,
  });

  res.status(200).json({ secureFilters: [regionSecuredFilter] });
}
