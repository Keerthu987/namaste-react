import { render ,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render res card with props",()=>{
    render(<RestaurantCard resData={MOCK}/>)
    const name=screen.getByText("Geetham Veg Restaurant")
    expect(name).toBeInTheDocument()

})

it("Should render res card with promoted label",()=>{
   

})