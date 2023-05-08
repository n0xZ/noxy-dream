import { SignIn } from '@clerk/nextjs/app-beta'
import React from 'react'

export default function Login() {
	return (
		<main className='grid h-screen place-items-center'>
			<SignIn afterSignInUrl="/home" />
		</main>
	)
}
