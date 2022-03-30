import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (

        <nav className="bg-gray-300 py-10 ">
            <div>
                <div className="flex justify-between">
                <h2 className="text-3xl font-bold ml-2  rounded-lg" >Utført av Hamsa Casale</h2>
                <p>i samarbeid med Jennie-Lovise</p>
                    <ul className="flex justify-center gap-3 mr-2">
                        <li className="bg-blue-500 text-blue-100 py-2 px-4 rounded-lg"><NavLink to="/movies">Movies</NavLink></li>
                        <li className="bg-red-500 text-red-100 py-2 px-4 rounded-lg"><NavLink to="/actors">Actors</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation