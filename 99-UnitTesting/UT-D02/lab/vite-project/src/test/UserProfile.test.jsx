import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import UserProfile from "./../components/UserProfile";

afterEach(cleanup);

test("renders user data correctly when user prop is provided", () => {
  const mockUser = { name: "Yasser", age: 25 };
  render(<UserProfile user={mockUser} />);

  // Verify that the user's name and age appear
  expect(screen.getByText(/name: Yasser, age: 25/i)).toBeInTheDocument();
});

test('displays "No user Data Available" when no user prop is provided', () => {
  render(<UserProfile />);

  expect(screen.getByText(/no user data available/i)).toBeInTheDocument();
});
