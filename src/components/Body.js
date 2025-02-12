import RestaurantCard,{withItemsLabel}from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
    let [searchText, setSearchText] = useState("");

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
   const WithItemsLabel= withItemsLabel(RestaurantCard)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(data)
        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredListOfRestaurants(restaurants);
    };

    const onlinestat = useOnlineStatus();

    if (onlinestat === false) {
        return <h1 className="text-center text-xl text-red-500">Oops, you're offline!</h1>;
    }

    if (!listOfRestaurants || listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    // const {loggedInUser,setUserInfo} =useContext(UserContext);

    return (
        <div className="body bg-gray-50 p-6">
            {/* Search and Filter Section */}
            <div className="m-container flex flex-col md:flex-row items-center  mb-8">
                {/* Search Input */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <input
                        data-testid="searchinput"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        type="text"
                        className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                        placeholder="Search restaurants..."
                    />
                    <button
                        className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mx-2"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredListOfRestaurants(filteredRes);
                        }}
                    >
                        Search
                    </button>
                </div>

                {/* Filter Button */}
                <button
                    className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mx-2"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setFilteredListOfRestaurants(filtered);
                    }}
                >
                    Top Rated
                </button>
                <label className="font-bold mx-2">User name</label>
                <input className="border border-black p-2" 
                // value={loggedInUser} onChange={(e)=> setUserInfo(e.target.value)}
                />
            </div>

            {/* Restaurants List */}
            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredListOfRestaurants.map((restaurant) => {
                    const { id, cloudinaryImageId, name, cuisines, avgRating, sla,aggregatedDiscountInfoV3 } = restaurant.info;

                    return (
                        <Link
                            key={id}
                            to={"/restaurants/" + id}
                            className="flex justify-center"
                        >
                            {
aggregatedDiscountInfoV3 ?<WithItemsLabel
id={id}
cloudinaryImageId={cloudinaryImageId}
name={name}
cuisines={cuisines}
avgRating={avgRating}
sla={sla}
/> :
<RestaurantCard
id={id}
cloudinaryImageId={cloudinaryImageId}
name={name}
cuisines={cuisines}
avgRating={avgRating}
sla={sla}
/>
                        }
                           
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
