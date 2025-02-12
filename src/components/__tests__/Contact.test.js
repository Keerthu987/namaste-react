import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
import { describe } from "yargs"

describe("contact us page test cases",()=>{
    test(
        "should load contact load",()=>{
            render(<Contact/>);
            const heading=screen.getByRole("heading");
            expect(heading).toBeInTheDocument();
        }
    )
    test(
        "should load contact load",()=>{
            render(<Contact/>);
            const button=screen.getByRole("button");
            expect(button).toBeInTheDocument();
        }
    )
    
    it(
        "2 inp box  load contact load",()=>{
            render(<Contact/>);
            const input=screen.getAllByRole("textbox");
            expect(input.length).toBe(2);
        }
    )
})

