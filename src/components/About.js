import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
constructor(props){
    super(props);

    console.log("parentconsted");


}
componentDidMount(){
    console.log("parentmounted");
}
render(){
    console.log("parentrenderd");

    return(
     <div>
        <h1>About</h1>
        <div>
            logged in:
            <UserContext.Consumer>
                {
                    ({loggedInUser})=> <h1>{loggedInUser}</h1>
                }
            </UserContext.Consumer>
        </div>
        <h2>THIS IS REACT</h2>
        {/* <User/> */}
        <UserClass name={"hello"}
        />
    </div>
    )
}
}

export default About;