import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActor } from "../lib/services/movieService";

const Actors = ({ actor, setActor }) => {
    const bringActor = async () => {
        const dataA = await getActor();
        setActor(dataA)
    }

    /*useEffect(() => {
        bringActor();
    }, [])*/

    return (
        <>
                <h2 className="text-2xl flex justify-center">Movie actors below:</h2>
                <button type="button" onClick={bringActor} className="bg-gray-500 text-blue-100 py-2 px-4 rounded-lg">Actors</button>
            <div className="py-2 px-2 flex justify-center gap-2">
                {actor?.length > 0 ? actor.map((actorList) => {
                    console.log(actorList)
                    return <article>
                        <h3>{actorList.title}</h3>
                        <p>{actorList.actor}</p>
                        <img src={actorList.poster.asset.url} className=" max-w-sm mb-3 border-2 border-slate-900 round rounded-t-lg"></img>
                        <button><Link to={actorList.slug} className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Actor info</Link></button>
                    </article>

                }) : null}
            </div>
        </>
    )

}
export default Actors