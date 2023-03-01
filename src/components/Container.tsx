import { FC } from 'react'

type ChildrenProps = {
    children: any
}

const Container: FC<ChildrenProps> = ({ children }) => (
    <div
        className='w-11/12 max-w-md rounded-lg bg-white pt-4 pb-6'
        style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
    >
        {children}
    </div >
)

export default Container