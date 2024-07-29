import { Outlet } from "react-router-dom";
/**
 * MainLayout Este componente es el principal, se encarga de mostrar el contenido de las rutas publicas con el mismo estilo
 * @returns 
 */
export const MainLayout = () => {
    return (
        <div className="h-screen bg-[#111827]">
          <Outlet />
        </div>
      );
}
