/*

      Fakes out user management logic

*/

export type User = {
  id: string;
  email: string;
  isAdmin: boolean;
};

/** Returns session token for a user */
export const signInUser = async (email: string, _password: string): Promise<string> => {
  const isAdmin = await getIsAdmin({email});
  const id = await getUserIdFromEmail(email);

  return JSON.stringify({ id, email, isAdmin })
};

/** Returns session token for a user */
export const signUpUser = async (email: string, _password: string): Promise<string> => {
  const isAdmin = await getIsAdmin({email});
  const id = await getUserIdFromEmail(email);

  return JSON.stringify({ id, email, isAdmin })
};

/** Returns a user from a current session token  */
export const getUserFromSession = async (sessionToken: string): Promise<User> => {

  return JSON.parse(sessionToken);
};

const getIsAdmin = async ({email}: {email: string}): Promise<boolean> => {
  return email.includes('admin');
};

const getUserIdFromEmail = async (email: string): Promise<string> => {
  return Buffer.from(email).toString('base64')
};