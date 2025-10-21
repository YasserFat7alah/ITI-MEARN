import { fireEvent, render , screen } from "@testing-library/react"
import TodoList from "../components/TodoList"

import "@testing-library/jest-dom"
import React from "react"



test("adds the task to the todolist",()=>{

    render(<TodoList/>)

   let input =screen.getByPlaceholderText("Add a task")
   let btn=screen.getByText("Add Task")


   fireEvent.change(input,{target:{value:"new task"}})

   fireEvent.click(btn)


  expect(screen.getByText("new task")).toBeInTheDocument() 







})