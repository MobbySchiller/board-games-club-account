import { FC } from 'react'

type ChildrenProps = {
    children: any
}

const Container: FC<ChildrenProps> = ({ children }) => (
    <div className='w-11/12 max-w-md rounded-lg bg-white py-4'>
        {children}
    </div>
)

export default Container