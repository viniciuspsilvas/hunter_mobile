import { act, fireEvent, render, screen } from "@testing-library/react-native";
import * as React from "react";

import App from "../App";

import { useData, useZoneActions } from "../src/customHooks";
import { Zone } from "../src/types";

jest.mock("../src/customHooks");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
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
      })
  })
);

test("shows loading when data are being fetched", () => {
  useData.mockReturnValue({
    loading: true,
    data: {},
    error: null
  });

  useZoneActions.mockReturnValue({
    toggleZoneStatus: jest.fn((zone: Zone) => ({
      id: 1
    }))
  });

  render(<App />);
  expect(screen.getByTestId("loading-spinner")).toBeOnTheScreen();
});

test("shows zones when data are fetched", async () => {
  useData.mockReturnValue({
    loading: false,
    data: {
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
    },
    error: null
  });

  useZoneActions.mockReturnValue({
    toggleZoneStatus: jest.fn((zone: Zone) => ({
      id: 1
    }))
  });

  render(<App />);
  expect(screen.getByTestId("zoneName1")).toBeOnTheScreen();
});

test("shows the Data no found component", () => {
  useData.mockReturnValue({
    loading: false,
    data: {
      id: 1,
      zones: []
    },
    error: null
  });

  useZoneActions.mockReturnValue({
    toggleZoneStatus: jest.fn((zone: Zone) => ({
      id: 1
    }))
  });

  render(<App />);
  expect(screen.getByTestId("dataNotFound")).toBeOnTheScreen();
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// test("renders correctly", () => {
// const mData = {
//   controller: {
//     id: 1,
//     zones: [
//       {
//         id: 1,
//         name: "Zone 1",
//         icon: {
//           id: 1,
//           fileName: "leaf.png"
//         },
//         suspended: false,
//         status: {
//           running: true
//         }
//       }
//     ]
//   }
// };

//   const mResponse = {
//     ok: true,
//     json: jest.fn().mockResolvedValue(mData)
//   };
//   global.fetch = jest.fn().mockResolvedValue(mResponse as unknown as Response);
//   render(<App />);

//   expect(screen.getByTestId("1ZoneDetail")).toBeOnTheScreen();
// });

// test("Press on the first zone", async () => {
//   useData.mockReturnValue({
//     loading: false,
//     data: {
//       id: 1,
//       zones: [
//         {
//           id: 1,
//           name: "Zone 1",
//           icon: {
//             id: 1,
//             fileName: "leaf.png"
//           },
//           suspended: false,
//           status: {
//             running: true
//           }
//         }
//       ]
//     },
//     error: null
//   });

//   render(<App />);
//   expect(screen.getByTestId("iconPressable")).toBeOnTheScreen();
//   expect(screen.getByText("Running...")).toBeOnTheScreen();

//   act(() => {
//     fireEvent.press(screen.getByTestId("iconPressable"));
//   });

//   expect(screen.queryByText("Running...")).toBeNull();
// });
