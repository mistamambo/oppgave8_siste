import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { getMovie } from '../lib/services/movieService';

const Movie = () => {
	const [data, setData] = useState();

	const { name } = useParams()

	const getMovieBySlug = async () => {
		const movieDetail = await getMovie(name)
		setData(...movieDetail)

	}

	useEffect(() => {
		getMovieBySlug()
	}, []);



	return (
		<>
			<article className="py-2 px-2">
				<h1 className="font-bold text-xl">{data?.title}</h1>
				<h3 className="font-bold"> Movie Star: {data?.actor} </h3>
				<p className="mb-3">{data?.tekst}</p>
				<button className="mb-3">
					<Link to="/movies" className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Back to movies</Link>
				</button>
			</article>
		</>
	)
}
export default Movie