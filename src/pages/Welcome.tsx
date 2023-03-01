import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../components/Container'

const Welcome: FC = () => {
    return (
        <Container>
            <div className='px-8 pt-6 pb-2 text-sm font-bold text-center'>
                <h1 className='text-xl mb-8'>Welcome to Board Games Club</h1>
                <NavLink to='/login'>
                    <button
                        className="bg-important text-white font-bold mr-6 py-2 px-4 rounded"
                        type="submit"
                    >
                        Log in
                    </button>
                </NavLink>
                <NavLink to='/signup'>
                    <button
                        className="bg-gradient-secondary text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign up
                    </button>
                </NavLink>
            </div>
        </Container>
    )
}

export default Welcome