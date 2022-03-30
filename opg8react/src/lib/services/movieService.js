import client from '../client'

const movie = `
title,
"actor": actor->name.current,
"slug": slug2.current,
tekst,
"poster": poster{asset->{url}},
"actor2": actor2->name.current,
`

const actor = `
actor,
"slug": name.current,
actorTekst,
"poster": poster{asset->{url}},
"movie": movie->slug2.current,
`

export async function getMovies (title) {
    const data = await client.fetch(`*[_type == "movie"]{${movie}}`)
    console.log(data);
    return data
}

export async function getActor () {
    const data = await client.fetch(`*[_type == "actor"]{${actor}}`)
    console.log(data);
    return data
}