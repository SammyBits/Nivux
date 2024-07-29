
interface props {
    title: string;
    style?: string;
}
/**
 * Title component with title and style
 * @param param title and style
 * @returns Title component
 */
export const Title = ({title, style}: props) => {
  return (
    <h1 className={`font-bold ${style}`}>{title}</h1>
  )
}
