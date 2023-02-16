import { render, screen } from "@testing-library/react-native";
import * as React from "react";

import App from "../App";

test("renders correctly", () => {
  render(<App />);

  expect(screen.getByTestId("app")).toBeOnTheScreen();
});
