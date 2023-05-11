import { drizzle } from 'drizzle-orm/node-postgres'
import { json, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { Pool } from 'pg'

const CONNECTION_STRING = process.env.DATABASE_URL ?? ''

type AuthorData = {
	name: string
	avatar_url: string
}

export const wishes = pgTable('wish', {
	id: serial('id').primaryKey(),
	content: varchar('title').notNull(),
	createdAt: timestamp('createdAt').defaultNow().notNull(),
	author: json('author').$type<AuthorData>(),
})
export const pool = new Pool({ connectionString: CONNECTION_STRING })
export type Wish = InferModel<typeof wishes>
export const db = drizzle(pool)
