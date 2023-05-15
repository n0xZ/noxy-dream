import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
	return (
		<main className="container max-w-4xl mx-auto mt-10">
			<section className="container grid max-w-4xl grid-rows-3 gap-3 place-items-center">
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
				<aside className="flex flex-row justify-between w-full p-4 space-x-4 border-2 border-gray-100 rounded-md h-36">
					<Skeleton className="bg-gray-300 rounded-full w-7 h-7" />
					<div className="flex flex-col w-full space-y-3">
						<Skeleton className="w-full pl-3 bg-gray-300 h-7" />
						<Skeleton className="w-full h-16 pl-3 bg-gray-300" />
					</div>
				</aside>
			</section>
		</main>
	)
}
