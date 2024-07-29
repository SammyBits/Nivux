import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/public/auth/Login"
import { AuthLayout } from "../layouts/private/auth/AuthLayout"
import { ProductsPage } from "../pages/private/ProductsPage"

export const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/auth/login" index={true} element={<Login />} />
            {/* Aqui van las rutas privadas, que solo se pueden acceder si el usuario esta logueado 
                Usamos el layout AuthLayout para mostrar las rutas privadas, ya que AuthLayout tiene la logica
                para verificar si el usuario esta logueado o no. Usando el hook useAuth
            */}
            <Route path="/" element={<AuthLayout />}>
                {/* Aqui van las rutas privadas */}
                <Route path="/private" element={<div>Private</div>} />
                <Route index path="/products" element={<ProductsPage />} />
            </Route>
        </Routes>
        
    )
}