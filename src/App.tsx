import { FC } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App: FC = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      <Login />
      {/* <Signup /> */}
    </div>
  )
}

export default App