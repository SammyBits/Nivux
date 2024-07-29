
interface props {
    title: string;
    style?: string;
}

export const Title = ({title, style}: props) => {
  return (
    <h1 className={`text-4xl font-bold ${style}`}>{title}</h1>
  )
}
