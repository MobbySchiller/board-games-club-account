import { FC, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

export type DataValidate = {
  email: boolean,
  password: boolean
}

const App: FC = () => {
  const [succeedLogged, setSucceedLogged] = useState<boolean>(false)

  const [isDataValidate, setIsDataValidate] = useState<DataValidate>({
    email: true,
    password: true
  })

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gradient-primary to-gradient-secondary'>
      {succeedLogged
        ?
        <Home />
        :
        <Login validation={{ isDataValidate, setIsDataValidate }} />}
    </div>
  )
}

export default App