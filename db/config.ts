import { column, defineDb, defineTable } from 'astro:db';

const Author = defineTable({
  columns: {

  }
})

// todo: signup (verify email w/ code: https://resend.com/overview, https://docs.astro.build/en/guides/authentication/)

const Story = defineTable({
  columns: {
    id: column.number ({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
    creationDate: column.date()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {}
});
