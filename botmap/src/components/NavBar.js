import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInfoCircle, FaCalendarAlt, FaEnvelope, FaBars, FaTimes, FaHome } from "react-icons/fa";
import logo from '../Images/marker_logo.png';

function NavBar() {
    //State to manage sidebar open/close status
    const [isOpen, setIsOpen] = useState(true);
    let navigate = useNavigate();

    // Function to navigate to a specified path
    const navigateTo = (path) => {
        navigate(path);
    };

    // Toggle the sidebar open/close state
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 h-screen opacity-90 ${isOpen ? 'w-40' : 'w-16'} bg-gray-900 text-gray-200 shadow-lg transition-all duration-300`}>
            <div className="flex flex-col items-center py-4">
                <button
                    onClick={toggleSidebar}
                    className="absolute top-2 right-1 p-2 text-gray-200 hover:text-blue-400 focus:outline-none"
                    aria-label={isOpen ? "Close sidebar" : "Open sidebar"} // Improved accessibility
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                
                {isOpen && (
                    <div className="flex flex-col items-center mt-6">
                        <Link to="/" className="flex flex-col items-center text-gray-200 text-2xl font-bold hover:text-blue-400">
                            <img src={logo} alt="Logo" className="w-16 h-16 rounded-full mb-3" />
                            <span className="text-sm">The Marker's</span>
                            <span className="text-sm">Botmaps</span>
                        </Link>
                    </div>
                )}
                
                <ul className="w-full mt-6">
                    {isOpen ? (
                        <>
                            <li className="group flex items-center py-4 px-6 hover:bg-gray-800 transition cursor-pointer" onClick={() => navigateTo('/')}>
                                <FaHome className="text-lg mr-3 group-hover:text-blue-400 transition" />
                                <span className="text-base group-hover:text-blue-400 transition">Home</span>
                            </li>
                            <li className="group flex items-center py-4 px-6 hover:bg-gray-800 transition cursor-pointer" onClick={() => navigateTo('/about')}>
                                <FaInfoCircle className="text-lg mr-3 group-hover:text-blue-400 transition" />
                                <span className="text-base group-hover:text-blue-400 transition">About</span>
                            </li>
                            <li className="group flex items-center py-4 px-6 hover:bg-gray-800 transition cursor-pointer" onClick={() => navigateTo('/events')}>
                                <FaCalendarAlt className="text-lg mr-3 group-hover:text-blue-400 transition" />
                                <span className="text-base group-hover:text-blue-400 transition">Events</span>
                            </li>
                            <li className="group flex items-center py-4 px-6 hover:bg-gray-800 transition cursor-pointer" onClick={() => navigateTo('/contact')}>
                                <FaEnvelope className="text-lg mr-3 group-hover:text-blue-400 transition" />
                                <span className="text-base group-hover:text-blue-400 transition">Contact</span>
                            </li>
                        </>
                    ) : (
                        <li></li> // Empty list item to maintain layout when sidebar is collapsed
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
