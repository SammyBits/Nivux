import { JWT } from "../../data/models/JwtModel";

export interface TokenStore {
    token: JWT | null;
    setToken: (token: JWT) => void;
    clearToken: () => void;
}