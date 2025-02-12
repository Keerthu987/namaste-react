import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
        userInfo:{
            name:"Dummy",
            location:"Default"
        }
        };
        console.log("Child Con");
    }
   async componentDidMount(){
const data= await fetch("https://api.github.com/users/Keerthu987");
const json=await data.json();

this.setState({
userInfo:json
})

console.log(json);


}
    render(){
        const {name,location

        }=this.state.userInfo;
        console.log("Child renderd");
        // debugger;
        return (
            <div className="user-card"
            >
                <h1>name
{name}
                </h1>
                <button onClick={()=>{
                    this.setState(
                        {
                            count:this.state.count+1,
                        }
                    )
                } }>
inc count
                </button>
                <h2>
                   { this.props.name}
                </h2>
                <h3>
                    {location}
                </h3>
              
            </div>
          )
    }
}

export default UserClass;