import React, { FC, useRef, useState, useEffect } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Error from '../components/Error'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase'
import { useNavigate } from 'react-router-dom'
import { DataToLogin } from '../types/App'
import { IsLoginDataCorrect } from '../types/Login'
import APP_CONFIG from '../config/config'

type LoginProps = {
    dataToLogin: {
        email: string,
        password: string
    },
    setDataToLogin: React.Dispatch<React.SetStateAction<DataToLogin>>
}

const Login: FC<LoginProps> = ({ dataToLogin, setDataToLogin }) => {
    const [isLoginDataCorrect, setIsLoginDataCorrect] = useState<IsLoginDataCorrect>({
        email: true,
        password: true
    })
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const { email, password } = dataToLogin
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate('/home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        }
    }, [dataToLogin])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const emailInputValue = String(emailRef.current?.value)
        const passwordInputValue = String(passwordRef.current?.value)
        if (!checkData(emailInputValue, passwordInputValue)) return
        setDataToLogin({
            email: emailInputValue,
            password: passwordInputValue
        })
    }

    const checkData = (email: string, password: string): boolean => {
        const isEmailCorrect = Boolean(email.match(APP_CONFIG.EMAIL_REGEX))
        const isPasswordCorrect = Boolean(password.length >= APP_CONFIG.MIN_PASSWORD_LENGTH)
        setIsLoginDataCorrect({
            email: isEmailCorrect,
            password: isPasswordCorrect
        })
        return isEmailCorrect && isPasswordCorrect
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
                        ref={emailRef}
                    />
                    {!isLoginDataCorrect.email &&
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
                        ref={passwordRef}
                    />
                    {!isLoginDataCorrect.password &&
                        <p className="text-error text-xs italic">
                            Invalid password.
                        </p>
                    }
                </div>
                <button
                    className="bg-important text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Sign in
                </button>
            </form>
            <p className='text-center text-sm'>Not a member? <a className='text-important font-bold'>Sign up</a></p>
        </Container>
    )
}

export default Login