import { FC, useEffect, useState } from 'react'
import { collection, getDoc, doc } from 'firebase/firestore'
import { database } from '../api/firebase'
import Container from '../components/Container'
import Title from '../components/Title'
import { UserData } from '../types/Home'
import qr from '../assets/qr.png'

type HomeProps = {
    emailToLogin: string
}

const Home: FC<HomeProps> = ({ emailToLogin }) => {
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        displayDB()
    }, [])

    const displayDB = async () => {
        const docRef = await doc(database, 'users', emailToLogin)
        const docSnap = await getDoc(docRef)
        await setUserData(docSnap.data())
    }

    return (
        <Container>
            <Title />
            {emailToLogin &&
                <div className='px-8 pt-6 pb-2 text-sm font-bold'>
                    <p className='mb-4'>First Name:
                        <span className='ml-1 font-normal'>{userData?.firstName}</span>
                    </p>
                    <p className='mb-4'>Last Name:
                        <span className='ml-1 font-normal'>{userData?.lastName}</span>
                    </p>
                    <p className='mb-4'>ID:
                        <span className='ml-1 font-normal'>{userData?.id}</span>
                    </p>
                    <img
                        src={qr}
                        alt="qr code"
                        className='w-5/6 sm:w-3/4 mx-auto' />
                </div>
            }
        </Container>
    )
}

export default Home