import { redirect } from 'next/navigation'
import React from 'react'

//sessions
import { auth } from '@/services/auth'
import Button from './componentes/button'

const Home = async () => {

    const session = await auth()
    if (!session?.user) return redirect('/pages/sign-up')

    return (
        <Button  />
    )
}

export default Home