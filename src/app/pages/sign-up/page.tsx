import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'

//pages
import Form_Sign_Up from './components/form-sign-up'

//sessions
import { auth } from '@/services/auth'

const Sign_In = async () => {

    const session = await auth()
    if (session?.user) return redirect('/pages')

    return (
        <>
            <div className="flex items-center justify-center min-h-[80vh] md:h-screen bg-gray-100 dark:bg-gray-900">
                <div className="md:w-full w-[90%] h-5/6 max-w-md p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 flex items-center justify-center">
                    <div className="space-y-8">
                        <div className="text-center">
                            <h1 className="text-2xl font-extrabold">Welcome!</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base">Sign up to your account using Google.</p>
                        </div>
                        <Form_Sign_Up />
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {`Have an account?`}{" "}
                                <Link
                                    href="/pages/sign-in"
                                    className="font-medium text-[var(--main)] underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign_In