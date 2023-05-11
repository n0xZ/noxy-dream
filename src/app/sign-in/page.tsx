import { SignIn, currentUser } from '@clerk/nextjs/app-beta'
import { redirect } from 'next/navigation'

export default async function Login() {
	const user = await currentUser()
	if (user) redirect('/home')
	return (
		<main className="grid h-screen place-items-center">
			<SignIn afterSignInUrl="/home" />
		</main>
	)
}
