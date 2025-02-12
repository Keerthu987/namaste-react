import { createContext } from "react";
import React from "react";

const UserContext=React.createContext({
   loggedInUser:"Def user"
})

export default UserContext;