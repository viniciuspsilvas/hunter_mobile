import { render, screen } from "@testing-library/react-native";
import * as React from "react";

import App from "../App";

beforeEach(() => {
  fetchMock.doMock();
});

test("shows loading when data are being fetched", () => {
  fetch.mockResponseOnce(JSON.stringify({
    data: {
      controller: {
        id: 1,
        zones: [
          {
            id: 1,
            name: "Zone 1",
            icon: {
              id: 1,
              fileName: "leaf.png"
            },
            suspended: false,
            status: {
              running: true
            }
          }
        ]
      }
    }

  }));

  render(<App />);
  expect(screen.getByText("Zone 1")).toBeOnTheScreen();
});