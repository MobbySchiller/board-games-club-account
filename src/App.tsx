import { FC, useState } from 'react'
import { DataToLogin } from './types/App'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const initialDataToLogIn = {
  email: '',
  password: ''
}

const App: FC = () => {
  const [dataToLogin, setDataToLogin] = useState<DataToLogin>(initialDataToLogIn)

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home emailToLogin={dataToLogin.email} />} />
        <Route path='/login' element={<Login dataToLogin={dataToLogin} setDataToLogin={setDataToLogin} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App