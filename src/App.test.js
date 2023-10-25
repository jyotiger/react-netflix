import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link test pull2222 modify add test", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
