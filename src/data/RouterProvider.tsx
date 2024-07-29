import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/public/auth/Login";
import { AuthLayout } from "../layouts/private/auth/AuthorizationLayout";
import { ProductsPage } from "../pages/private/ProductsPage";
import { MainLayout } from "../layouts/public/MainLayout";
import { AuthenticationLayout } from "../layouts/private/auth/AuthenticationLayout";

export const RouterProvider = () => {
  return (
    <Routes>
        {/* Aqui van las rutas publicas, que se pueden acceder sin estar logueado */}
        Usamos el layout AuthenticationLayout para tener un estilo diferente en las rutas publicas
      <Route element={<AuthenticationLayout />}>
        <Route path="/auth/login" index={true} element={<Login />} />
      </Route>
      {/* Aqui van las rutas privadas, que solo se pueden acceder si el usuario esta logueado 
                Usamos el layout AuthLayout para mostrar las rutas privadas, ya que AuthLayout tiene la logica
                para verificar si el usuario esta logueado o no. Usando el hook useAuth
      */}
      <Route path="/" element={<AuthLayout />}>
        {/* Usamos el layout MainLayout para que las rutas privadas tengan el mismo estilo*/}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas privadas */}
          <Route path="/private" element={<div>Private</div>} />
          <Route index path="/products" element={<ProductsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
