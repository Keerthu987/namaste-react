import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { id, cloudinaryImageId, name, cuisines, avgRating, sla } = props;

    return (
        <div className="res-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full
         w-80
        " key={id}>
    <img src={CDN_URL + cloudinaryImageId} alt="res-img" className="res-img w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-gray-600 text-sm">{cuisines.join(", ")}</h4>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <h4 className="flex items-center">
                <span className="text-yellow-500 mr-1">{avgRating || 2.1}</span> ⭐
            </h4>
            <h4 className="text-gray-600">{sla.deliveryTime} mins</h4>
        </div>
    </div>
</div>

    );
};

export const withItemsLabel=(RestaurantCard)=>{
    return  (props)=>{
        return(
            <div>
                <label className="absolute bg-green-700 text-white m-1 p-2 rounded-m"
                >
                    30% OFF
                </label>
                <RestaurantCard {...props}
                />
            </div>
        )
    }
};

export default RestaurantCard;
