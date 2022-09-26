import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestMe } from "../components/TestMe";

it("should render name input", () => {
  render(<TestMe />);

  const nameInput = screen.getByTestId("name");
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveAttribute("type", "text");
});

it("should pass a valid number as age", () => {
  render(<TestMe />);

  const ageInput = screen.getByTestId("age");
  userEvent.type(ageInput, "29");

  expect(screen.getByTestId("age")).toHaveValue(29);
});
