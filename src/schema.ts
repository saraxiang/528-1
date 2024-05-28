import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const characters = pgTable('characters', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  race: varchar('race', { length: 255 }).notNull(),
  class: varchar('class', { length: 255 }).notNull(),
  abilities: text('abilities').notNull(),
  description: text('description').notNull(),
  equipment: text('equipment').notNull(),
});
