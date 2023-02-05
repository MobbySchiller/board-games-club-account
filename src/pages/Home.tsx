import { FC } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import qr from '../assets/qr.png'

const Home: FC = () => {

    return (
        <Container>
            <Title />
            <div className='px-8 pt-6 pb-2 text-sm font-bold'>
                <p className='mb-4'>First Name:
                    <span className='ml-1 font-normal'>Name</span>
                </p>
                <p className='mb-4'>Last Name:
                    <span className='ml-1 font-normal'>Surname</span>
                </p>
                <p className='mb-4'>ID:
                    <span className='ml-1 font-normal'>ID</span>
                </p>
                <img
                    src={qr}
                    alt="qr code"
                    className='w-5/6 sm:w-3/4 mx-auto' />
            </div>
        </Container>
    )
}

export default Home