import { fireEvent, render } from "@testing-library/react";
import { it } from "node:test";
import Body from "../Body";
import MOCK from "../mocks/mockresListdata.json"
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
    return Promise.resolve({json:()=>{
        return Promise.resolve(MOCK);
    }})
})

it("Should render body component",()=>{
  async()=>{ await act(
    async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
   )}
   
   const searchbtn=screen.getByRole("button",{name:"Search"});
   const searchInp=screen.getByTestId("searchinput");
   fireEvent.change(searchInp,{target:{value:"burger"}});
   fireEvent.click(searchbtn)
   expect(searchbtn).toBeInTheDocument();
});

