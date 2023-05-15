import { WishList } from '@/components/wish/list'
import { eq, sql } from 'drizzle-orm'
import { db, wishes } from '@/db/schema'
import Link from 'next/link'

async function getWishes() {
	const actualDate = new Date()

	const existingWishes = await db
		.select()
		.from(wishes)
		.where(sql`${wishes.createdAt} < ${actualDate.toJSON()}`)

	return existingWishes
}
function EmptyWishes() {
	return (
		<section className="flex flex-col items-center justify-center w-full h-full space-y-1 text-center">
			<h2 className="text-lg font-medium xl:text-3xl">
				No hay deseos publicados por el momento
			</h2>
			<Link
				href="/home/wish/create"
				className="font-medium underline text-md xl:text-xl"
			>
				Sé el primero en publicar tu sueño en este año!
			</Link>
		</section>
	)
}
export default async function Home() {
	const wishes = await getWishes()

	return (
		<main className="container h-screen max-w-4xl mx-auto mt-10">
			{!wishes.length ? <EmptyWishes /> : <WishList wishes={wishes} />}
		</main>
	)
}
