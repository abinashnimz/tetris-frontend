import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"



export const AddPlayers = () =>{

    const [fullName, setFullName] = useState("");
    const [playerUrl, setPlayerUrl] = useState("");
    const [country, setCountry] = useState("");
    const [flagUrl, setFlagUrl] = useState("");
    const [tetrimino, setTetrimino] = useState("");
    const [tetriminoUrl, setTetriminoUrl] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/player/create', {
                fullName:fullName,
                photoUrl:playerUrl,
                country:country,
                countryFlagUrl:flagUrl,
                favoriteTetrimino:tetrimino,
                tetriminoPhotoUrl:tetriminoUrl
            },
            {
                headers: { "Content-Type": "application/json" }
            });

            console.log(res);

            if (res.success === false) {
                setError(data.message);
                return;
            }
            if (!res.ok) {
                setError(data.message);
                return;
            }
            if (res.status==200) {
                setError(null);
                navigate('/show-players');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return(
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSubmit} >
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Player</h2>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Full Name</label>
                            <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3 mb-2" placeholder="John Doe" required value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Player Image</label>
                            <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3 mb-2" placeholder="PIC URL" required value={playerUrl} onChange={(e)=>setPlayerUrl(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-bold mb-2">Country</label>
                            <input type="text" id="country" name="country" className="border rounded w-full py-2 px-3 mb-2" placeholder="UAE" required value={country} onChange={(e)=>setCountry(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-bold mb-2">Flag</label>
                            <input type="text" id="country" name="country" className="border rounded w-full py-2 px-3 mb-2" placeholder="Flag URL" required value={flagUrl} onChange={(e)=>setFlagUrl(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-bold mb-2">Tetrimino</label>
                            <input type="text" id="country" name="country" className="border rounded w-full py-2 px-3 mb-2" placeholder="Tetrimino" required value={tetrimino} onChange={(e)=>setTetrimino(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-bold mb-2">Tetrimino</label>
                            <input type="text" id="country" name="country" className="border rounded w-full py-2 px-3 mb-2" placeholder="Tetrimino URL" required value={tetriminoUrl} onChange={(e)=>setTetriminoUrl(e.target.value)} />
                        </div>
                        <div>
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline cursor-pointer">Add Player</button>
                        </div>
                        <div>
                            <Link className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline cursor-pointer" to={"/show-players"}>Show Players</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </div>
    )
}