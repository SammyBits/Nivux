import React from "react";
interface props {
  children: React.ReactNode;
}
/**
 * SpaceY container component to add space between children
 * @param param children 
 * @returns SpaceY container component
 */
export const SpaceY = ({ children }: props) => {
  return <div className="space-y-2">{children}</div>;
};
