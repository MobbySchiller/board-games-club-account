import { FC } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'

const Login: FC = () => {
    return (
        <Container>
            <Title />
            <form className="flex flex-col rounded px-8 pt-6 pb-2">
                <div className="mb-4">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="username">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-primary mb-1 leading-tight focus:outline-none focus:shadow-important"
                        id="username"
                        type="text"
                        placeholder="Enter email" />
                    <p className="text-error text-xs italic">Please enter an email.</p>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-primary text-sm font-bold mb-2"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded bg-input w-full py-2 px-3 text-primary mb-1 leading-tight focus:outline-none focus:shadow-important"
                        id="password"
                        type="password"
                        placeholder="Enter password" />
                    <p className="text-error text-xs italic">Please choose a password.</p>
                </div>
                <button
                    className="bg-important text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Login
                </button>
            </form>
            <p className='text-center text-sm'>Not a member? <a className='text-important font-bold'>Sign up</a></p>
        </Container>
    )
}

export default Login