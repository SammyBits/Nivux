import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="h-screen bg-[#111827] grid place-content-center">
          <Outlet />
        </div>
      );
}
