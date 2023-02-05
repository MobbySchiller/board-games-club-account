import React, { FC, useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Error from '../components/Error'
import { DataValidate } from '../App'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const MIN_PASSWORD_LENGTH = 6

type LoginProps = {
    validation: {
        isDataValidate: DataValidate,
        setIsDataValidate: React.Dispatch<React.SetStateAction<DataValidate>>
    }
}

type LoginData = {
    email: string,
    password: string
}

const Login: FC<LoginProps> = ({ validation }) => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    })

    const { isDataValidate, setIsDataValidate } = validation

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        checkData()
    }

    const checkData = () => {
        const { email, password } = loginData
        const isEmailCorrect = Boolean(email.match(EMAIL_REGEX))
        const isPasswordCorrect = Boolean(password.length >= MIN_PASSWORD_LENGTH)
        setIsDataValidate({
            email: isEmailCorrect,
            password: isPasswordCorrect
        })
    }

    return (
        <Container>
            <Title />
            {/* <Error /> */}
            <form
                className="flex flex-col px-8 pt-6 pb-2"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 bg-input text-primary mb-1 leading-tight focus:outline-important"
                        id="email"
                        type="text"
                        placeholder="Enter email"
                        value={loginData.email}
                        onChange={(event) => setLoginData({ ...loginData, email: event.target.value })} />
                    {!isDataValidate.email &&
                        <p className="text-error text-xs italic">
                            Invalid email.
                        </p>
                    }
                </div>
                <div className="mb-6">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded bg-input w-full py-2 px-3 text-primary mb-1 leading-tight focus:outline-important"
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={loginData.password}
                        onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
                    />
                    {!isDataValidate.password &&
                        <p className="text-error text-xs italic">
                            Invalid password.
                        </p>
                    }
                </div>
                <button
                    className="bg-important text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Sign up
                </button>
            </form>
            <p className='text-center text-sm'>Not a member? <a className='text-important font-bold'>Sign up</a></p>
        </Container>
    )
}

export default Login