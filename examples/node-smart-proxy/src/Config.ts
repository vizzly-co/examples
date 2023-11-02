export const getQueryEngineBaseUrl = () =>
  process.env["VIZZLY_QUERY_ENGINE_BASE_URL"] as string;
export const getQueryEngineApiKey = () =>
  process.env["VIZZLY_QUERY_ENGINE_API_KEY"] as string;
export const getEncryptionSecret = () =>
  process.env["VIZZLY_ENCRYPTION_SECRET"] as string;
export const getDatabasePassword = () =>
  process.env["DATABASE_PASSWORD"] as string;
export const getDatabaseUser = () => process.env["DATABASE_USER"] as string;
export const getDatabaseHost = () => process.env["DATABASE_HOST"] as string;
export const getDatabaseName = () => process.env["DATABASE_NAME"] as string;
export const getVizzlyPrivateKey = () =>
  JSON.parse(process.env["VIZZLY_PRIVATE_KEY"] as string).value;
