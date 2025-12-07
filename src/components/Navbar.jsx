import {NavLink} from "react-router-dom";
import redbulllogo from '../assets/redbull.png';
import xesportslogo from "../assets/xesportslogo.png";

export const Navbar = ()=>{
    
    return(
        <nav className="bg-gray-800 border-b shadow-2xl">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-cnter md:items-stretch md:justify-start">
                        <NavLink to="/" className="flex flex-shrink-0 items-center m4-5">
                            <img className="h-16 w-auto" src={ redbulllogo } alt="React Jobs" />
                        </NavLink>
                        <div className="md:ml-auto flex items-center"> 
                            <img className="h-16 w-auto" src={ xesportslogo } alt="React Jobs" />
                            <span className="md:block text-white text-2xl font-bold ml-2">XESPORTS-BROADCAST</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}