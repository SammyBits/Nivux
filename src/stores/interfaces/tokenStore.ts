import { JWT } from "../../data/models/JwtModel";

export interface TokenStore {
    token: JWT | string | null;
    setToken: (token: JWT) => void;
    clearToken: () => void;
    isValid: () => Promise<boolean>;
}