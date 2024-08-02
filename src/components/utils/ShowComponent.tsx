import { ReactNode } from "react";

interface ShowComponentProps {
  shouldShow: boolean;
  children: ReactNode;
} 
/**
* ShowComponent Este componente se encarga de mostrar o no un componente
* @param {boolean} shouldShow Indica si se debe mostrar el componente
* @param {ReactNode} children Componente a mostrar
* @returns {ReactNode} Componente a mostrar
 */
export const ShowComponent = ({ shouldShow, children }: ShowComponentProps): ReactNode => {
  return shouldShow ? <>{children}</> : null;
};
