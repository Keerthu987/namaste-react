import logo from '../../logo.png';
import { useState,useContext } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlinestat = useOnlineStatus();
 const {loggedInUser}=useContext(UserContext);
 const cart=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg">
            {/* Logo Section */}
            <div className="logo-container">
                <img className="w-16 h-16 rounded-full" src={logo} alt="Logo" />
            </div>

            {/* Nav and Status Section */}
            <div className="flex items-center space-x-8">
                <ul className="flex gap-6 m-0 p-0 list-none text-lg font-medium">
                    <li>
                        <span className="text-sm text-gray-600 opacity-80">
                            Online Status: {onlinestat ? "✅" : "❌"}
                        </span>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hover:text-gray-500 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-gray-500 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-gray-500 transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/grocery"
                            className="hover:text-gray-500 transition-colors duration-300"
                        >
                            Grocery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="cursor-pointer hover:text-gray-500 transition-colors duration-300">
                            Cart -  {cart.length}
                        </Link>
                    </li>
                   
                </ul>

                {/* Login/Logout Button */}
                <button
                    onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                    className="mx-5 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                    {btnName}
                </button>
                <li className='font-bold'>
       {loggedInUser}
                </li>
            </div>
        </div>
    );
};

export default Header;


