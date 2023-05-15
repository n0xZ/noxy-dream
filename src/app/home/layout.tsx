import { ReactNode } from 'react'
import { ClerkLoaded, ClerkLoading, RedirectToSignIn } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs/app-beta'
import Link from 'next/link'
import { Mukta } from 'next/font/google'
import { Skeleton } from '@/components/ui/skeleton'

const mukta = Mukta({ subsets: ['latin'], weight: '400' })
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<SignedIn>
				<header className="p-6 border-b-2 border-[#e7e5e4]">
					<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto text-md xl:text-xl ">
						<Link
							href="/home"
							className="duration-100 ease-in-out hover:text-emerald-400"
						>
							Home
						</Link>

						<ul className="flex flex-row items-center space-x-4">
							<li>
								<Link href="/home/wish/create">Agregar nuevo deseo</Link>
							</li>
							<li>
								<ClerkLoading>
									<Skeleton className="bg-gray-300 rounded-full w-9 h-9 " />
								</ClerkLoading>
								<ClerkLoaded>
									<UserButton afterSignOutUrl="/" />
								</ClerkLoaded>
								<SignedOut>
									<RedirectToSignIn />
								</SignedOut>
							</li>
						</ul>
					</nav>
				</header>
			</SignedIn>

			<main className={mukta.className}> {children}</main>
		</>
	)
}
