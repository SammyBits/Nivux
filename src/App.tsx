import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from './data/RouterProvider'

export const App = () => {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  )
}