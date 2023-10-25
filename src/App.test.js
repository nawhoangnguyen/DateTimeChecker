import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DateValidator from "./DateValidator";

describe("DateValidator Component", () => {
  // Mock the global alert method
  global.alert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Valid date alert is displayed", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<DateValidator />);

    // Find input fields and enter valid date values
    const dayInput = getByPlaceholderText("Day");
    const monthInput = getByPlaceholderText("Month");
    const yearInput = getByPlaceholderText("Year");

    fireEvent.change(dayInput, { target: { value: "29" } });
    fireEvent.change(monthInput, { target: { value: "02" } });
    fireEvent.change(yearInput, { target: { value: "2000" } });

    // Find and click the "Check" button
    const checkButton = getByText("Check");
    fireEvent.click(checkButton);

    // Assert that the error message is not displayed
    const errorMessage = getByTestId("error");
    expect(errorMessage).toHaveTextContent("");

    // Assert that the alert method is called with the expected message
    expect(global.alert).toHaveBeenCalledWith("Valid date: 29/02/2000");
  });
});


test("Invalid date input", () => {
  const { getByPlaceholderText, getByText } = render(<DateValidator />);

  // Get the input fields
  const dayInput = getByPlaceholderText("Day");
  const monthInput = getByPlaceholderText("Month");
  const yearInput = getByPlaceholderText("Year");

  // Simulate user input for an invalid date (e.g., 32/13/2022)
  fireEvent.change(dayInput, { target: { value: "32" } });
  fireEvent.change(monthInput, { target: { value: "13" } });
  fireEvent.change(yearInput, { target: { value: "2022" } });

  // Trigger the validation by clicking the "Check" button
  const checkButton = getByText("Check");
  fireEvent.click(checkButton);

  // Check if the error message is present (meaning the input is invalid)
  const errorMessage = getByText("Day must be between 1 and 31.");
  expect(errorMessage).toBeTruthy();
});

describe("DateValidator Component", () => {
  // Mock the global alert method
  global.alert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Valid date alert is displayed", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<DateValidator />);

    // Find input fields and enter valid date values
    const dayInput = getByPlaceholderText("Day");
    const monthInput = getByPlaceholderText("Month");
    const yearInput = getByPlaceholderText("Year");

    fireEvent.change(dayInput, { target: { value: "15" } });
    fireEvent.change(monthInput, { target: { value: "03" } });
    fireEvent.change(yearInput, { target: { value: "2023" } });

    // Find and click the "Check" button
    const checkButton = getByText("Check");
    fireEvent.click(checkButton);

    // Assert that the error message is not displayed
    const errorMessage = getByTestId("error");
    expect(errorMessage).toHaveTextContent("");

    // Assert that the alert method is called with the expected message
    expect(global.alert).toHaveBeenCalledWith("Valid date: 15/03/2023");
  });
});
test("Test date that is greater than 31",() => {
  const { getByText, getByTestId, getByPlaceholderText } = render(<DateValidator />);

  const dayInput = getByPlaceholderText("Day");
  const monthInput = getByPlaceholderText("Month");
  const yearInput = getByPlaceholderText("Year");

  fireEvent.change(dayInput, { target: { value: "32" } });
  fireEvent.change(monthInput, { target: { value: "02" } });
  fireEvent.change(yearInput, { target: { value: "2000" } });

  // Trigger the validation by clicking the "Check" button
  const checkButton = getByText("Check");
  fireEvent.click(checkButton);

  // Check if the error message is present (meaning the input is invalid)
  const errorMessage = getByText("Day must be between 1 and 31.");
  expect(errorMessage).toBeTruthy();
})
