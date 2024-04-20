import { column, defineDb, defineTable, NOW } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number ({ primaryKey: true }),
    displayName: column.text(),
  }
})

// todo: signup (verify email w/ code: https://resend.com/overview, https://docs.astro.build/en/guides/authentication/)

const Story = defineTable({
  columns: {
    id: column.number ({ primaryKey: true, unique: true }),
    title: column.text(),
    authorId: column.number ({ references: () => Author.columns.id }),
    body: column.text(),
    creationDate: column.date({ default: NOW }),
    published: column.boolean({ default: false }),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Author,
    Story
  }
});
