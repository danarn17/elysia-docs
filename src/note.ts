import { Elysia,error,t } from 'elysia'

class Note{
    constructor(public data:string[]=['Moondrop']){}
}

export const note = new Elysia()
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