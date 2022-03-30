import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { getActor } from '../lib/services/movieService';

const Actor = () => {
	const [data, setData] = useState();
	const { name } = useParams();

	const getActorBySlug = async () => {
		const actorDetail = await getActor(name)
		setData(...actorDetail)
	}

	useEffect(() => {
		getActorBySlug()
	}, [name]);

	return (
		<>
			<article >
				<img style={{ "width": "300px", "display": "block", "marginBottom": "10px" }} src={data?.poster.asset.url} alt="Skuespiller" className=" w-1/4 border-2 border-slate-900 round rounded-t-lg"></img>
				<h2 className="text-lg font-bold">{data?.actor}</h2>
				<p className="mb-2">{data?.actorTekst}</p>

			</article>

			<button className="mb-3 mt-3"><Link to="/Actors" className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg ">Back to actors</Link></button>
		</>


	)

}
export default Actor