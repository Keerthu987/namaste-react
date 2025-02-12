
import {
    useEffect, useState

} from "react";
import { data } from "react-router";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItemCategory from "./ResItemCategory";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);


    const { resId }
        = useParams();
        const resInfo=useRestaurantMenu(resId);

const [showInd,setShowInd]=useState(0);
    // useEffect(() => {
    //     fetchMenu();
    // },
    //     []

    // );

    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_API
    //         + resId +"&catalog_qa=undefined&submitAction=ENTER" );
    //     const json = await data.json();
    //     console.log(json);
    //     console.log(json.data.cards[2].card.card.info.name);
    //     setResInfo(json.data);
    // };

    // const { name, costForTwo } = resInfo?.data?.cards[2]?.card?.card?.info;
    if (resInfo == null

    ) return <Shimmer />

    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    
    // console.log("cards");
    const category=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    console.log(category);
    if (!Array.isArray(cards) || cards.length === 0) {
        return <p className="restaurant-closed-message">The restaurant is currently closed. Please check back later!</p>;
    }
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2 className="font-bold text-lg">
                {"Price For Two"}-
                ₹{resInfo?.cards[2]?.card?.card?.info?.costForTwo / 100}
            </h2>

            <h3 className="font-bold">Cuisines:</h3>
            <p className="font-light
            ">{cuisines ? cuisines.join(", ") : "No cuisines available"}</p>
{
    category.map((cat,ind)=> <ResItemCategory key={cat?.card?.card?.info?.itemCards?.id}
     data={cat?.card?.card}
     showItems={ind==showInd && true}
     setShowInd ={()=>setShowInd(ind)}
     />)
}

            {/* <div className="menu">
                <ul className="menu-list">
                    {cards.map((item, index) => (
                        <li key={item.card?.info?.id} className="menu-item">
                            <span className="menu-item-name">{item.card?.info?.name || "Name not available"}</span>
                            <span className="menu-item-price">
                                {item.card?.info?.price ? `₹${item.card.info.price / 100}` : "NA"}
                            </span>
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default RestaurantMenu;