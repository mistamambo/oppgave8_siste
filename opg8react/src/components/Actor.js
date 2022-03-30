import { Link, useParams } from "react-router-dom"

const Actor = ({ actor }) => {

    const { name } = useParams();
    console.log(name);

    const actorListe = actor.find((actorL) => {
        return actorL.slug === name
    })

    return (
        <>
            <article >
                <img src={actorListe.poster.asset.url} alt="Skuespiller" className=" w-1/4 border-2 border-slate-900 round rounded-t-lg"></img>
                <h2 className="text-lg font-bold">{actorListe.actor}</h2>
                <p className="mb-2">{actorListe.actorTekst}</p>
                <h3>
                    Appeard in: {actorListe.movie}
                </h3>

            </article>

            <button className="mb-3 mt-3"><Link to="/Actors" className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg ">Back to actors</Link></button>
        </>


    )

}
export default Actor