import { ReactNode } from "react";

interface ShowComponentProps {
  shouldShow: boolean;
  children: ReactNode;
}/**
 * ShowComponent is a utility component that conditionally renders its children based on the value of the shouldShow prop.
 * @param shouldShow Boolean value that determines whether the children should be rendered
 * @param children The children to be rendered
 * @returns The children if shouldShow is true, otherwise null
 */
export const ShowComponent = ({ shouldShow, children }: ShowComponentProps) => {
  return shouldShow ? <>{children}</> : null;
};