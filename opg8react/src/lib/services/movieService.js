import client from '../client'

const movie = `
_id,
title,
"actor": actor->actor,
"slug": slug.current,
tekst,
"poster": Bilde{asset->{url}},
`

const actor = `
_id,
actor,
"slug": name.current,
actorTekst,
"poster": poster{asset->{url}},
"movie": movie->slug.current,
`

export const getMovies = async () => {
	const data = await client.fetch(`*[_type == "movie"]{${movie}}`)
	return data
}

export const getMovie = async (slug) => {
	const data = await client.fetch(`*[_type == "movie" && slug.current == $slug]{${movie}}`, { slug });
	return data;
};

export const getActor = async (slug) => {
	const data = await client.fetch(`*[_type == "actor" && name.current == $slug]{${actor}}`, { slug });
	return data;
};

export const getActors = async () => {
	const data = await client.fetch(`*[_type == "actor"]{${actor}}`)
	return data
}