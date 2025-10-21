
import {render , screen} from "@testing-library/react"
import Header from "../components/Header"

import "@testing-library/jest-dom"

import React from "react"

test("renders the header with title",()=>{

 render(<Header title="Test Header"/>)

 expect(screen.getByText("Test Header")).toBeInTheDocument()


})