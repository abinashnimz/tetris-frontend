import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const AddSeedingScore = () => {

    const [score, setScore] = useState("");
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleAddScore = async () => {
        console.log("handlescore working")
    }

    useEffect(() => {
        const fetchPlayers = async () => {
            console.log("useeffect working")
            try {
                const response = await axios.get("/api/seeding/scores");
                console.log(response);
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
                                <th className="p-2 border">Scores</th>
                                <th className="p-2 border">Add score</th>
                                <th className="p-2 border">Submit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {players.map((player) => (
                                <tr key={player._id}>
                                    <td className="border p-2">{player.fullName}</td>
                                    <td className="border p-2">{player.country}</td>
                                    <td className="border p-2">
                                        {player.scores?.join(", ")}
                                    </td>
                                    <td className="border p-2">
                                        <input type="text" />
                                    </td>
                                    <td className="border-b p-2">
                                        <button onClick={()=>handleAddScore(player._id)} className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline cursor-pointer">Add</button>
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