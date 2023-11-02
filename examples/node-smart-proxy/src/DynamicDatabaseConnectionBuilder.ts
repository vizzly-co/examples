import { Encryption } from "@vizzly/auth";
import * as Settings from "./Settings";

export const buildConnection = async (): Promise<string> => {
  return await Encryption.encrypt(Settings.getEncryptionSecret(), {
    host: Settings.getDatabaseHost(),
    password: Settings.getDatabasePassword(),
    user: Settings.getDatabaseUser(),
    database: Settings.getDatabaseName(),
  });
};
