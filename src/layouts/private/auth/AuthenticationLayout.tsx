import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "../../../stores/useToken";
/**
 * AuthenticationLayout En este caso el componente, se va utilizar para la pagina login, pero cualquier componente que tenga este layout, se le aplica la logica.
 * @returns 
 */
export const AuthenticationLayout = () => {
  // Usamos el location para obtener la ubicacion actual del usuario
  const location = useLocation();
  const { token } = useToken();
  // Si el usuario esta logueado, lo redirigimos a la pagina principal
  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return (
    <div className="h-screen w-screen bg-[#6b26be] grid place-content-center">
      <Outlet />
    </div>
  );
};
