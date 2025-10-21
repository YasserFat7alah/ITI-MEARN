import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Toggle from "./../components/Toggle";
import "@testing-library/jest-dom";
import React from "react";

afterEach(cleanup);

test("renders the Toggle button", () => {
  render(<Toggle />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test('initial state should be "OFF"', () => {
  render(<Toggle />);
  expect(screen.getByText("OFF")).toBeInTheDocument();
});

test('clicking the button toggles between "ON" and "OFF"', () => {
  render(<Toggle />);
  const button = screen.getByRole("button");

  // Initial state
  expect(button).toHaveTextContent("OFF");

  // First click -> ON
  fireEvent.click(button);
  expect(button).toHaveTextContent("ON");

  // Second click -> OFF again
  fireEvent.click(button);
  expect(button).toHaveTextContent("OFF");
});
