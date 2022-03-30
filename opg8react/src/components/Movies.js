import { useEffect } from "react"
import { Link } from "react-router-dom";
import { getMovies } from "../lib/services/movieService";


const Movies = ({ data, setData }) => {

	const fetchMovies = async () => {
		const dataM = await getMovies();
		setData(dataM)

	}
	useEffect(() => {
		fetchMovies();
	}, [])

	return (
		<>
			<h2 className="flex justify-center text-2xl">Movies below</h2>
			{data && data.map((details) => (
				<div key={details._id} className="flex flex-row-2 justify-center gap-2 p-3 mb-5">
					<article className="text-lg font-bold mt-3">
						<h3>{details.title}</h3>
						<img style={{ "width": "300px", "display": "block", "marginBottom": "10px" }} src={details?.poster?.asset?.url} className=" max-w-sm mb-3 round rounded-t-lg " ></img>
						<Link to={`/movies/${details.slug}`} className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg" >Movie Info</Link>
					</article>
				</div>
			))}

		</>
	)
}
export default Movies