import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/useAuth";

export const AuthLayout = () => {
  // Usamos el hook useAuth para verificar si el usuario esta logueado o no
  // Usamo estados globales con zustand para mantener el token y verificar si el token es valido
  // Esto nos ayuda a tener un componente que se encarga de verificar si el usuario esta logueado o no
  const { isLogged, loading } = useAuth();
  // Usamos useLocation para obtener la ubicacion actual del usuario
  // Esto es util para redirigir al usuario a la pagina de login si no esta logueado
  const location = useLocation();

  // Si el componente esta cargando, mostramos un mensaje de cargando
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si el usuario no esta logueado, lo redirigimos al login
  if (!isLogged) {
    // Usamos el componente Navigate de react-router-dom para redirigir al usuario a la pagina de login
    // Usamos el estado from para redirigir al usuario a la pagina que intento acceder antes de ser redirigido al login
    // Esto es util para redirigir al usuario a la pagina que intento acceder despues de loguearse
    // El replace es para reemplazar la pagina actual en el historial del navegador
    return (
      <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
    );
  }
  // Si el usuario esta logueado, mostramos las rutas privadas
  return <Outlet />;
};
