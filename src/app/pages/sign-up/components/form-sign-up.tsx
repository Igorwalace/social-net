import React, { Suspense } from 'react'
import Button from './button'
import Loading from '../../loading/page'

const Form_Sign_Up = () => {

    // const form = useForm()

    // const handleSubmit = form.handleSubmit((data) => {
    // console.log(data)
    // })

    return (
        <>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        User name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="user name"
                        // {...form.register('name')}
                        className="placeholder:text-sm text-sm w-full px-3 py-2 border outline-none border-gray-300 rounded-md focus:border-[var(--main)] focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                <Button />
            </form>
        </>
    )
}

export default Form_Sign_Up