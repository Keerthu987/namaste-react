import { useState } from "react";
import ResFoodCategList from "./ResFoodCategList";

const ResItemCategory = ({ data,showItems,setShowInd }) => {
    // const [showItems,setShowItems]=useState(false)
    const handleClick=()=>{
         // setShowItems(!showItems)
         setShowInd();
    };
    return (
        <div >
            <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-3 " >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{"⬇️"}</span>
                </div>
{ 
showItems && <ResFoodCategList items={data.itemCards} />
}
            </div>
        </div>
    )
}

export default ResItemCategory;
