import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResFoodCategList = ({ items }) => {
    // console.log(items);
    const dispatch=useDispatch();
const handleAddItem=(item)=>{
     dispatch(addItem(item))
}
// console.log(handleAddItem)
// if (!items) {
//     return <div>Loading...</div>; // or handle missing data however you'd like
//   }
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id}
                        className="flex justify-between py-2 my-2 text-left border-b-gray-800 border-b-1 font-semibold">

                        <div className={item.card.info.imageId ? "w-10/12" : "w-auto"}>
                            <span>
                                {item.card.info.name}
                            </span>
                            <span> {" ₹ :"}
                                {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                            </span>

                            <p className="py-2 font-light text-xs">
                                {item.card.info.description}
                            </p>
                        </div>

                        {item.card.info.imageId && (
                            <div className="relative w-2/12">
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    className="w-24 h-auto rounded-lg"
                                    alt={item.card.info.name}
                                />
                                <button onClick={()=> handleAddItem(item)}
                                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold px-2 py-1 rounded shadow-lg flex items-center justify-center text-xs">
                                  { "➖" +"ADD" +"➕"}
                                </button>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    );
}

export default ResFoodCategList;

