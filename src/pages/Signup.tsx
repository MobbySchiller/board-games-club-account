import { FC, useState, useRef, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, setDoc, doc } from 'firebase/firestore'
import { auth, database } from '../api/firebase'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import APP_CONFIG from '../config/config'
import { IsSignupDataCorrect, DataToSignup } from '../types/Signup'
import Container from '../components/Container'
import Title from '../components/Title'

const initialDataToSignUp = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: ''
}

const Signup: FC = () => {
    const [dataToSignup, setDataToSignup] = useState<DataToSignup>(initialDataToSignUp)
    const [isSignupDataCorrect, setIsSignupDataCorrect] = useState<IsSignupDataCorrect>({
        firstName: true,
        lastName: true,
        email: true,
        password: true
    })
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const collectionRef = collection(database, 'users')
    const navigate = useNavigate()

    useEffect(() => {
        const { email, password } = dataToSignup
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    saveDataInDB()
                    setSuccessMessage('You have successfully registered')
                    setTimeout(() => navigate('/login'), 2000)
                })
                .catch((error) => {
                    const errorCode = error.code
                    setErrorMessage(errorCode)
                })
        }
    }, [dataToSignup])

    const saveDataInDB = () => {
        const { firstName, lastName, email, id } = dataToSignup
        setDoc(doc(collectionRef, email), {
            firstName,
            lastName,
            email,
            id
        })
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const firstNameInputValue = String(firstNameRef.current?.value)
        const lastNameInputValue = String(lastNameRef.current?.value)
        const emailInputValue = String(emailRef.current?.value)
        const passwordInputValue = String(passwordRef.current?.value)
        setSuccessMessage('')
        setErrorMessage('')
        if (!checkData(firstNameInputValue, lastNameInputValue, emailInputValue, passwordInputValue)) return
        setDataToSignup({
            firstName: firstNameInputValue,
            lastName: lastNameInputValue,
            email: emailInputValue,
            password: passwordInputValue,
            id: uuidv4()
        })
    }

    const checkData = (firstName: string, lastName: string, email: string, password: string): boolean => {
        const isFirstNameCorrect = Boolean(firstName.match(APP_CONFIG.NAME_REGEX))
        const isLastNameCorrect = Boolean(lastName.match(APP_CONFIG.NAME_REGEX))
        const isEmailCorrect = Boolean(email.match(APP_CONFIG.EMAIL_REGEX))
        const isPasswordCorrect = Boolean(password.length >= APP_CONFIG.MIN_PASSWORD_LENGTH && password.match(APP_CONFIG.PASSWORD_REGEX))

        setIsSignupDataCorrect({
            firstName: isFirstNameCorrect,
            lastName: isLastNameCorrect,
            email: isEmailCorrect,
            password: isPasswordCorrect
        })
        return isFirstNameCorrect && isLastNameCorrect && isEmailCorrect && isPasswordCorrect
    }

    return (
        <Container>
            <Title />
            {errorMessage &&
                <p className='bg-error text-center text-white font-bold py-1'>{errorMessage}</p>
            }
            {successMessage &&
                <p className='bg-success text-center text-white font-bold py-1'>{successMessage}</p>
            }
            <form
                className="flex flex-col rounded px-8 pt-6 pb-2"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 bg-input text-primary mb-1 leading-tight focus:outline-important"
                        id="firstName"
                        type="text"
                        placeholder="Enter first name"
                        ref={firstNameRef} />
                    {!isSignupDataCorrect.firstName &&
                        <p className="text-error text-xs italic">
                            The name must start with a capital letter.
                        </p>
                    }
                </div>
                <div className="mb-4">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="username">
                        Last Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 bg-input text-primary mb-1 leading-tight focus:outline-important"
                        id="lastName"
                        type="text"
                        placeholder="Enter last name"
                        ref={lastNameRef} />
                    {!isSignupDataCorrect.lastName &&
                        <p className="text-error text-xs italic">
                            The name must start with a capital letter.
                        </p>
                    }
                </div>
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
                        ref={emailRef} />
                    {!isSignupDataCorrect.email &&
                        <p className="text-error text-xs italic">
                            The entered value is not an email.
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
                        ref={passwordRef} />
                    {!isSignupDataCorrect.password &&
                        <p className="text-error text-xs italic">
                            The password should contain a capital letter and a number.
                        </p>
                    }
                </div>
                <button
                    className="bg-important text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Sign up
                </button>
            </form>
        </Container>
    )
}

export default Signup