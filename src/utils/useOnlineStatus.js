import { useEffect, useState } from "react";

const useOnlineStatus =()=> {
 const [onlinestat, setOnlineStat]=useState(true);

    useEffect(
        ()=>{
                 window.addEventListener("offline",()=>{
                       setOnlineStat(false);
                 })
                 window.addEventListener("online",()=>{
                    setOnlineStat(true);
                 }
                 )
              },[]
            
    )

    return onlinestat;

}

export default useOnlineStatus;