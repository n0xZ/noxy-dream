import { Wish } from '@/db/schema'
import Image from 'next/image'

type Props = {
	wish: Wish
}
export function WishItem(props: Props) {
	return (
		<article className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
			<Image
				src={props.wish.author?.avatar_url!}
				alt={`Avatar de ${props.wish.author?.name}`}
				width={28}
				height={28}
				className="rounded-full"
			/>
			<aside className="flex flex-col w-full space-y-3">
				<h2 className="font-medium text-center">{props.wish.author?.name}</h2>
				<p className="text-gray-500">{props.wish.content}</p>
			</aside>
		</article>
	)
}
