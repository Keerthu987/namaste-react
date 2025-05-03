import logo from '../../logo.png';
import { useState,useContext } from 'react';
import { NavLink, Link } from 'react-router';
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
                <Link
                            to="/">
                <img className="w-16 h-16 rounded-full" src={logo} alt="Logo" />
                </Link>
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
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-green-600 font-bold border-b-2 border-green-600" : "hover:text-gray-500"
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "text-green-600 font-bold border-b-2 border-green-600" : "hover:text-gray-500"
      }
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? "text-green-600 font-bold border-b-2 border-green-600" : "hover:text-gray-500"
      }
    >
      Contact Us
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/grocery"
      className={({ isActive }) =>
        isActive ? "text-green-600 font-bold border-b-2 border-green-600" : "hover:text-gray-500"
      }
    >
      Grocery
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        isActive ? "text-green-600 font-bold border-b-2 border-green-600" : "hover:text-gray-500"
      }
    >
      Cart - {cart.length}
    </NavLink>
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


