import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/LoginForm';

export default function Login() {

    // Check for the session cookie
    const sessionCookie = cookies().get('session');

    // If the session cookie exists, redirect the user to the home page or any other page
    if (sessionCookie) {
        redirect('/');
    }




    return (
        <>
            <main
                className='max-w-sm py-40 mx-auto'
            >
                <h1
                    className='my-5 text-2xl font-bold'

                >
                    Login
                </h1>
                <LoginForm />
            </main>
        </>
    )
}
