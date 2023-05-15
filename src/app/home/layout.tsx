import { Skeleton } from '@/components/ui/skeleton'
import { ClerkLoaded, ClerkLoading, RedirectToSignIn } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs/app-beta'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { Mukta } from 'next/font/google'

const mukta = Mukta({ subsets: ['latin'], weight: '400' })
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<SignedIn>
				<header className="p-5">
					<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto text-md xl:text-xl">
						<Link href="/home">Home</Link>

						<ClerkLoading>
							<Skeleton className="rounded-full w-9 h-9 " />
						</ClerkLoading>
						<ClerkLoaded>
							<UserButton afterSignOutUrl="/" />
						</ClerkLoaded>
						<SignedOut>
							<RedirectToSignIn />
						</SignedOut>
					</nav>
				</header>
			</SignedIn>

			<main> {children}</main>
		</>
	)
}
