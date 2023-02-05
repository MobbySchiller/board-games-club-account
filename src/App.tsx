import { FC } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App: FC = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      {/* <Login /> */}
      {/* <Signup /> */}
      {<Home />}
    </div>
  )
}

export default App