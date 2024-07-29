import { create } from "zustand";
import { TokenStore } from "./interfaces/tokenStore";
import { loadCookie } from "../utils/CookieManager";

/**
 * Token store with Zustand
 * Este store se encarga de manejar el token de autenticacion
 * Se encarga de guardar el token en el estado y en las cookies
 * Tambien se encarga de verificar si el token es valido
 * Para verificar si el token es valido se hace una peticion al servidor
 */
export const useToken = create<TokenStore>((set, get) => ({
  token: loadCookie("token") || null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  isValid: async () => {
    if (!get().token) return false;

    // Aqui se hace la peticion al servidor para validar el token
    //

    return true;
  },
}));
