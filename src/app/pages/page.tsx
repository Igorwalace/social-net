import { redirect } from 'next/navigation'
import React from 'react'

//sessions
import { auth } from '@/services/auth'

const Home = async () => {

    const session = await auth()
    if (!session?.user) return redirect('/pages/sign-up')

    return (
        <div>Home</div>
    )
}

export default Home