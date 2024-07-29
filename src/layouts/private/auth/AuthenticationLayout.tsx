import { Outlet } from "react-router-dom";

export const AuthenticationLayout = () => {
    return (
        <div className="h-screen w-screen bg-[#110520] grid place-content-center">
          <Outlet />
        </div>
      );
}
