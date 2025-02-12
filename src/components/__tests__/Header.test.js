import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
it("Should load with login btn",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

// const  loginbtn=screen.getByRole("button");
// const  loginbtn=screen.getByText("button");
const  loginbtn=screen.getByRole("button",{name:"Login"});


expect(loginbtn).toBeInTheDocument();

})

it("Should load with login btn",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);


const  cart=screen.getByText(/Cart/);


expect(cart).toBeInTheDocument();

})

it("Should load with login btn",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);


const  loginbtn=screen.getByRole("button",{name:"Login"});

fireEvent.click(loginbtn)
const  logoutbtn=screen.getByRole("button",{name:"Logout"});

expect(logoutbtn).toBeInTheDocument();

})