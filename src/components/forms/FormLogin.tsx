import { useLocation, useNavigate } from "react-router-dom";
import { SpaceY } from "./containers/SpaceY";
import { LabelLogin } from "./labels/LabelLogin";
import { useState } from "react";
import { UserLoginModel } from "../../data/models/user/auth/UserLoginModel";
import { login } from "../../data/services/auth/AuthServices";
import { saveCookie } from "../../utils/CookieManager";
import { useToken } from "../../stores/useToken";
import { ShowComponent } from "../utils/ShowComponent";

export const FormLogin = () => {
  const [loginData, setLoginData] = useState<UserLoginModel>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useToken();
  const [error, setError] = useState<string>("");

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData) return;

    const result = await login(loginData);
    if (!result) {
      setError("Invalid credentials");
      return;
    }
    // Aqui guardamos el token en el store. Esto es util para mantener el token en la aplicacion
    setToken(result);
    // Guardamos el token en una cookie con una duracion de 1 hora. Esto es util para mantener al usuario logueado
    saveCookie(
      "token",
      result.access_token,
      new Date(Date.now() + 60 * 60 * 1000)
    );
    // Redirigimos al usuario a la pagina que intento acceder antes de ser redirigido al login
    navigate(location.state?.from ? location.state.from : "/", {
      replace: true,
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleOnSubmit}>
      <SpaceY>
        <LabelLogin
          title="Email"
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <input
          id="email"
          placeholder="test@gmail.com"
          required
          onChange={(e) => {
            setLoginData({ ...loginData, email: e.target.value });
          }}
          className="flex w-full h-10 px-3 py-2 text-sm border rounded-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible::ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </SpaceY>

      <SpaceY>
        <LabelLogin
          title="Password"
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <input
          id="password"
          required
          className="flex w-full h-10 px-3 py-2 text-sm border rounded-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible::ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
          type="password"
        />
      </SpaceY>
      <ShowComponent shouldShow={error.length > 0}>
        <p className="text-red-500">{error}</p>
      </ShowComponent>

      <button className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-900 ">
        Sign In
      </button>
    </form>
  );
};
