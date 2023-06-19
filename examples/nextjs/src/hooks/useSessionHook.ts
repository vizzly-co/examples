import { useEffect, useState } from "react";

/**
 * 
 * Uses the identity endpoint to know if the user is signed in or not.
 * 
 * This is not a requirement for running Vizzly. This is just part of the example
 * application.
 * 
 * */
export const useSessionHook = (): {isSignedIn: boolean | null} => {
  const [isSignedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const doWork = async () => {
      const response = await fetch('/api/identity');

      setSignedIn(response.status == 200)
    }
    doWork();
  }, []);

  return {isSignedIn};
};