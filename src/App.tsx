import { FC } from 'react'
import Login from './pages/Login'

const App: FC = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      <Login />
    </div>
  )
}

export default App