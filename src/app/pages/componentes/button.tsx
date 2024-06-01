'use client'
import { signOut } from 'next-auth/react'
import React, { useState } from 'react'
import Loading from '../loading/loading'

const Button = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [isDisable, setIsDisable] = useState<boolean>(false)

    return (
        <>
            <button
                onClick={async () => {
                    setLoading(true)
                    setIsDisable(true)
                    await signOut()
                    setLoading(false)
                    setIsDisable(false)
                }}
                className={`w-full px-4 py-2 font-medium text-white  rounded-md hover:scale-95 duration-200 dark:bg-blue-600 dark:hover:bg-blue-700 ${isDisable ? 'bg-slate-400' : 'bg-[var(--main)]'}`}
            >
                Logout
            </button>
            <Loading loading={loading} />
        </>
    )
}

export default Button