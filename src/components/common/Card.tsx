
interface props {
    children: React.ReactNode;
}
export const Card = ({children} : props) => {
  return (
    <>
        <div className="bg-white shadow-md rounded-md p-4">
            {children}
        </div>
    </>
  )
}
