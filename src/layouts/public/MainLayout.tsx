import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="h-screen bg-[#111827] overflow-hidden">
          <Outlet />
        </div>
      );
}
