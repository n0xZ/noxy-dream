import { currentUser } from '@clerk/nextjs/app-beta'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { CreateWishForm } from './form'
import { db, wishes } from '@/db/schema'

type Fields = {
	title: string
	content: string
}
export default function CreateWishPage() {
	async function addWish(formData: FormData) {
		'use server'
		const user = await currentUser()

		if (!user) throw new Response('Usuario no existente.')

		const data = Object.fromEntries(formData) as unknown as Fields

		const newWish = await db.insert(wishes).values({
			author: {
				avatar_url: user.profileImageUrl,
				name: user.username ?? 'Anónimo',
			},
			title: data.title,
			content: data.content,
		})

		if (newWish) redirect('/home')
		else
			throw new Error('Datos incorrectos ingresados al agregar el nuevo deseo.')
	}
	return (
		<section className="grid h-screen place-items-center">
			<CreateWishForm createWish={addWish} />
		</section>
	)
}
