import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActors } from "../lib/services/movieService";

const Actors = ({ actor, setActor }) => {
	const bringActor = async () => {
		const dataA = await getActors();
		setActor(dataA)
	}

	useEffect(() => {
		bringActor();
	}, [])

	return (
		<>
			<h2 className="text-2xl flex justify-center">Movie actors below:</h2>

			<div className="py-2 px-2 flex justify-center gap-2">
				{actor && actor.map((actorList) => (
					<article key={actorList._id}>
						<h3>{actorList.title}</h3>
						<p>{actorList.actor}</p>
						<img style={{ "width": "300px", "display": "block", "marginBottom": "10px" }} src={actorList.poster.asset.url} className=" max-w-sm mb-3 border-2 border-slate-900 round rounded-t-lg"></img>
						<button><Link to={actorList.slug} className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Actor info</Link></button>
					</article>

				))}
			</div>
		</>
	)

}
export default Actors