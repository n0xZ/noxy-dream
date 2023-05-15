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
				className="rounded-full w-9 h-9"
			/>
			<aside className="flex flex-col w-full space-y-3">
				<h2 className="text-xl font-medium text-center">
					{props.wish.author?.name} - {props.wish.title}
				</h2>
				<p className="text-sm text-center text-gray-500">{props.wish.content}</p>
			</aside>
		</article>
	)
}
