import { Link, useParams } from "react-router-dom"

const Movie = ({data}) => {

    const {name} = useParams();
    console.log(name);

    const movieListe = data.find((movieL)=> {
        return movieL.slug === name
    })

    return (
        <>

        <article className="py-2 px-2">
            <h1 className="font-bold text-xl">{movieListe.title}</h1>
            { movieListe.actor2 !=null ?  ( <h3 className="font-bold mb-3"> Movie Stars: {movieListe.actor}  and {movieListe?.actor2}</h3>) : (<h3 className="font-bold"> Movie Star: {movieListe.actor} </h3>) }
            <p className="mb-3">{movieListe.tekst}</p>

            <button className="mb-3"><Link to="/movies" className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Back to movies</Link></button>
        </article>


        </>
    )
}
export default Movie