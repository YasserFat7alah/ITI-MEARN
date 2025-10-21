import { screen , fireEvent, render} from "@testing-library/react"
import Counter from "../components/Counter"
import "@testing-library/jest-dom"
import React from "react"


test("increament and decreament the counter",()=>{

render(<Counter/>)

  let increamentBtn =screen.getByText("Increment")
  let decreamentBtn =screen.getByText("Decrement")
   let para  = screen.getByText(/Count:/)

fireEvent.click(increamentBtn)

expect(para).toHaveTextContent("Count: 1")


fireEvent.click(decreamentBtn)

expect(para).toHaveTextContent("Count: 0")


})