import { Elysia,error,t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { note } from "./note";
import { user } from "./user";

class Note {
  constructor(public data: string[] = ['Moonhalo']) { }
}

const app = new Elysia()
  .use(swagger())
  .use(note)
  .use(user)
  // .get("/hello", () => "Do you miss me?")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
