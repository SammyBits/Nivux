import { Outlet } from "react-router-dom";

/**
 * MainLayout Este componente es el principal, se encarga de mostrar el contenido de las rutas públicas con el mismo estilo
 * @returns 
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#272727] flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
