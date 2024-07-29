import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/auth/Login"
import { AuthLayout } from "../layouts/private/auth/AuthLayout"

export const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/auth/login" index={true} element={<Login />} />
            {/* Aqui van las rutas privadas, que solo se pueden acceder si el usuario esta logueado 
                Usamos el layout AuthLayout para mostrar las rutas privadas, ya que AuthLayout tiene la logica
                para verificar si el usuario esta logueado o no. Usando el hook useAuth
            */}
            <Route path="/" element={<AuthLayout />}>
            
            </Route>
        </Routes>
        
    )
}