'use client'

import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function CreateWishForm(props: {
	createWish: (formData: FormData) => void
}) {
	const { pending } = useFormStatus()

	return (
		<form
			className="container flex flex-col justify-center max-w-4xl mx-auto space-y-3"
			action={props.createWish}
		>
			<h1 className="text-3xl font-medium text-center">
				Definí tu nuevo deseo en este año!
			</h1>
			<aside className="flex flex-col justify-center space-y-3">
				<label htmlFor="title">El título de mi deseño</label>
				<Input name="title" placeholder="Deseos: 2023" disabled={pending} />
				<span className="h-6 text-red-500">{}</span>
			</aside>
			<aside className="flex flex-col justify-center space-y-3">
				<label htmlFor="title">Mi deseo de este año</label>
				<Textarea
					name="content"
					placeholder="Espero poder cumplir con todas mis tareas y de paso, estudiar más."
					disabled={pending}
				/>
			</aside>
			<button
				type="submit"
				disabled={pending}
				className="flex flex-row items-center justify-center w-full max-w-4xl p-3 space-x-2 font-medium text-white bg-black rounded-lg"
			>
				{pending ? (
					<>
						<Spinner />
						<span>Creando nota...</span>
					</>
				) : (
					'Crear nueva nota'
				)}
			</button>
		</form>
	)
}
