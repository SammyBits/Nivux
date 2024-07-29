import React from "react";
interface props {
  children: React.ReactNode;
}
export const SpaceY = ({ children }: props) => {
  return <div className="space-y-2">{children}</div>;
};
