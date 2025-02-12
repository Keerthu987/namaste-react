import { useState } from "react"
const User = () => {
  const [count,setcount]=useState(0);
  return (
    <div className="user-card"
    >
        <h2>
            count: {count}
        </h2>
        <h3>
            location
        </h3>
      
    </div>
  )
}

export default User
