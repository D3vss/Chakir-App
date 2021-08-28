import { createContext } from "react";

export const CredentialsContext = createContext({
  storedCredentials: {},
  setStoredCredentials: () => {},
});
