import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const ShowPlayers = () => {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const deletePlayer = async (id) => {
        try {

            console.log("delete working");
            const res = await axios.delete(`/api/player/delete/${id}`);
            console.log(res);
            if (res.status === 200) {
                console.log("res.status.working");
                setError(null);
                navigate('/show-players');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        const fetchPlayers = async () => {
            console.log("useeffect working")
            try {
                const response = await axios.get("/api/player/show-players");
                if (response) setPlayers(response.data);
            } catch (err) {
                setError("Failed to fetch players");
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);



    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-24">
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-2 border">Player Name</th>
                                <th className="p-2 border">Country</th>
                                <th className="p-2 border">Edit</th>
                                <th className="p-2 border">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {players.map((player) => (
                                <tr key={player._id}>
                                    <td className="border p-2">{player.fullName}</td>
                                    <td className="border p-2">{player.country}</td>
                                    <td className="border p-2">
                                        <Link to={`/update-player/${player._id}`} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline cursor-pointer">Edit</Link>
                                    </td>
                                    <td className="border p-2">
                                        <button onClick={()=>deletePlayer(player._id)} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))}

                            {players.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="text-center p-4 text-gray-500">
                                        No Players found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}