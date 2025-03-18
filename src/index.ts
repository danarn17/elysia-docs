import { Elysia,error,t } from "elysia";
import { swagger } from '@elysiajs/swagger'

class Note {
  constructor(public data: string[] = ['Moonhalo']) { }
}

const app = new Elysia()
  .use(swagger())
  .decorate('note',new Note())
  .get("/note", ({ note }) => note.data)
  .get('/note/:index', ({ note, params: { index } }) => {
    return note.data[index] ?? error(404)
  },
    {
      params: t.Object({
      index: t.Number()
    })
  })
  // .get("/hello", () => "Do you miss me?")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
