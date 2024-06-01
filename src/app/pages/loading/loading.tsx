import React from 'react'

interface Props {
    loading: boolean
}

const Loading = ({ loading }: Props) => {
    return (
        <>
            {
                loading &&
                <main className='fixed -top-10 bottom-0 right-0 left-0 flex items-center justify-center z-50 bg-[rgb(0,0,0,0.3)]' >
                    <span className="loader"></span>
                </main>
            }
        </>
    )
}

export default Loading