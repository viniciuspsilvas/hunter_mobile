import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import ZoneDetails from "../components/ZoneDetails";

test("renders correctly", () => {
  render(<ZoneDetails onIconClick={() => {}} zone={{
    
  }} />);

  expect(screen.getByTestId("title")).toBeOnTheScreen();
});
