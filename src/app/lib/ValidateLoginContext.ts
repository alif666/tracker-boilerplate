// lib/ValidateLoginContext.ts
import { createContext } from "react";

export interface ValidateLoginContextType {
  currentUser: any;
  token: string;
}

export const ValidateLoginContext = createContext<ValidateLoginContextType | null>(null);
