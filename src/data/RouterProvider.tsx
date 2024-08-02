import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/public/auth/Login";
import { AuthorizationLayout } from "../layouts/private/auth/AuthorizationLayout";
import { ProductsPage } from "../pages/private/ProductsPage";
import { MainLayout } from "../layouts/public/MainLayout";
import { AuthenticationLayout } from "../layouts/private/auth/AuthenticationLayout";
import { ChildrenPage } from "../pages/private/ChildrenPage";
/**
 * RouterProvider Este componente se encarga de manejar las rutas de la aplicacion
 * @returns RouterProvider Este componente se encarga de manejar las rutas de la aplicacion
 */
export const RouterProvider = () => {
  return (
    <Routes>
      {/* Aqui van las rutas publicas, que se pueden acceder sin estar logueado */}
      {/* Usamos el layout AuthenticationLayout para tener un estilo diferente en
      las rutas publicas */}
      <Route element={<AuthenticationLayout />}>
        <Route path="/auth/login" index element={<Login />} />
      </Route>
      {/* Aqui van las rutas privadas, que solo se pueden acceder si el usuario esta logueado 
                Usamos el layout AuthLayout para mostrar las rutas privadas, ya que AuthLayout tiene la logica
                para verificar si el usuario esta logueado o no. Usando el hook useAuth
      */}
      <Route element={<AuthorizationLayout />}>
        {/* Usamos el layout MainLayout para que las rutas privadas tengan el mismo estilo*/}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas privadas */}
          <Route path="/" element={<ChildrenPage/>} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Route>
        <Route path="*" element={<div className="text-black">404</div>} />
    </Routes>
  );
};
