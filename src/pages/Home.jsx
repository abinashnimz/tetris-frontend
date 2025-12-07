import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 className="mt-4 text-2xl py-8 mb-10">WELCOME TO XESPORTS-BROADCAST</h1>

            <div className="flex gap-4">
                <Link to={"/add-players"} className="bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-2 px-4 rounded-full w-[16%] focus:outline-none focus:shadow-outline mt-4 block">Add Players</Link>
                <Link to={"/show-players"} className="bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-2 px-4 rounded-full w-[16%] focus:outline-none focus:shadow-outline mt-4 block">Show Players</Link>
            </div>
            <div className="flex gap-4">
                <Link to={"/seedings-page"} className="bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-2 px-4 rounded-full w-[16%] focus:outline-none focus:shadow-outline mt-4 block">Seeding MAtch</Link>
                <Link to={"/matches"} className="bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-2 px-4 rounded-full w-[16%] focus:outline-none focus:shadow-outline mt-4 block">Matches</Link>
            </div>
        </div>

    )
}