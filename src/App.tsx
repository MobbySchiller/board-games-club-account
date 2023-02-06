import { FC, useState, useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { DataToLogIn } from './types/App'

const initialDataToLogIn = {
  email: '',
  password: ''
}

const App: FC = () => {
  const [succeedLogged, setSucceedLogged] = useState<boolean>(false)
  const [dataToLogIn, setDataToLogIn] = useState<DataToLogIn>(initialDataToLogIn)

  useEffect(() => {
    const { email, password } = dataToLogIn
    if (email && password) {
      console.log(dataToLogIn)
    }
  }, [dataToLogIn])

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      {succeedLogged
        ?
        <Home />
        :
        <Login setDataToLogIn={setDataToLogIn} />}
    </div>
  )
}

export default App