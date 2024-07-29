import { useCallback, useEffect, useState } from "react";
import { useToken } from "../../stores/useToken";

/**
 * Hook to check if the user is logged in
 * @returns Object with the loading state and the isLogged state
 */
export const useAuth = () => {
  const { token, isValid } = useToken();
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  /**
   * Se usa useCallback para que la funcion no se cree cada vez que se renderiza el componente
   * Esto es util para evitar que se cree una nueva funcion cada vez que se renderiza el componente
   * Lo cual puede causar problemas de rendimiento
   * Vamos a usar esta funcion para verificar si el token es valido
   * Esto lo usaremos para saber si el usuario esta logueado o no en la aplicacion
   */
  const checkAuth = useCallback(async () => {
    try {
      if (!token) {
        setIsLogged(false);
        setLoading(false);
        return;
      }

      const valid = await isValid();
      setIsLogged(valid);
    } catch (error) {
      setIsLogged(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [token, isValid]);

  /**
   * Se usa useEffect para ejecutar la funcion checkAuth cuando el componente se llama por primera vez
   * Esto es util para verificar si el usuario esta logueado o no, cuando el componente se renderiza por primera vez
   * Tambien se usa para verificar si el token sigue siendo valido
   * Esto es util para mantener al usuario logueado en la aplicacion
   * Tambien se usa para verificar si el usuario esta logueado o no cuando el token cambia
   */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { loading, isLogged };
};
