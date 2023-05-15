import { Wish } from '@/db/schema'
import { WishItem } from './item'

type Props = {
	wishes: Wish[]
}
export function WishList(props: Props) {
	return (
		<section className="container grid max-w-4xl grid-rows-3 gap-3 place-items-center">
			{props.wishes.map((w) => (
				<WishItem wish={w} key={w.id} />
			))}
		</section>
	)
}
