import Link from 'next/link'
import Image from 'next/image'
import LandingImage from '../../public/landing-img.svg'
import { Mukta } from 'next/font/google'

const mukta = Mukta({ subsets: ['latin'], weight: '400' })
export default async function Home() {
	return (
		<>
			<header className="p-6 ">
				<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto text-md xl:text-xl">
					<Link href="/">Noxy-wish</Link>

					<Link href="/sign-in" className="p-3 text-white bg-black rounded-lg">
						Comienza ya!
					</Link>
				</nav>
			</header>
			<main
				className={` ${mukta.className}  flex flex-col items-center justify-center h-screen p-1 space-y-3 xl:p-0 container mx-auto max-w-4xl`}
			>
				<Image
					src={LandingImage}
					alt="Imagen de landing."
					width={512}
					height={512}
				/>
				<h2 className="text-2xl font-bold text-center text-gray-900 xl:text-5xl">
					Si de esta manera no se cumple tus deseos a fín de año,{' '}
					<span className=" text-emerald-400">estamos al horno.</span>
				</h2>
				<p className="text-center text-gray-500 xl:text-lg">
					En Noxy - dream, podés definir tu meta a fín de año, y luego ver si las
					cumpliste o no.{' '}
				</p>
				<Link
					href="/sign-in"
					className="w-64 p-3 mt-3 font-bold text-center text-gray-100 bg-black rounded-lg"
				>
					Empieza ya!
				</Link>
			</main>
		</>
	)
}
