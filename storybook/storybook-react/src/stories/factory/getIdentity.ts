export function getIdentity() {
  return async () => {
    const response = await fetch(
      'https://app.vizzly.co/api/doc-examples-identity-callback'
    );
    if (response.ok) {
      const responseBody = await response.json();
      return responseBody.accessTokens;
    }
    return null;
  };
}
