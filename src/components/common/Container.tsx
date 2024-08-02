interface props {
  children: React.ReactNode;
  columns: number;
  gap: number;
}
/**
 * Container component es un componente que se encarga de mostrar los elementos hijos en forma de grid
 * @param children Este es el contenido que se va a mostrar en forma de grid
 * @param columns Este es el numero de columnas que se va a mostrar
 * @param gap Este es el espacio entre los elementos hijos
 * @returns se retorna un div con la clase grid y las columnas y el gap que se le pasaron como props
 */
export const Container = ({ children, columns, gap }: props) => {
  const hadGap: number = gap ? gap : 4;
  return (
    // Estoy haciendo un componente donde se pueda definir el numero de columnas y el gap entre los elementos hijos
    <div className={`grid grid-cols-${columns} gap-${hadGap} p-5`}>
      {/* Esto me va ayudar a que todo lo que tenga dentro de este componente se muestre en forma de grid */}
      {children}
    </div>
  );
};
