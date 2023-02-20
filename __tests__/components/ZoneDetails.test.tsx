import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import ZoneDetails from "../../src/components/ZoneDetails";
import { Zone } from "../../src/types";

let zone: Zone;

beforeEach(() => {
  zone = {
    id: 1,
    name: "Zone 1",
    suspended: false
  };
});

test("renders 'name' property", () => {
  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toHaveTextContent("Zone 1");
});

test("renders 'suspended' equals 'true", () => {
  zone.suspended = true;
  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("suspended")).toHaveTextContent("Suspended");
});

test("renders 'suspended' equals 'false", () => {
  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.queryByTestId("suspended")).toBeNull();
});

test("renders ZoneDetails with status.running = true", () => {
  zone.status = {
    running: true
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toBeOnTheScreen();
  expect(screen.getByTestId("runningIcon")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toHaveTextContent("Running...");
});

test("renders ZoneDetails with status.running = false", () => {
  zone.status = {
    running: false
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toBeOnTheScreen();
  expect(screen.queryByTestId("runningIcon")).toBeNull();
});

test("ZoneDetails onIconClick function", () => {
  const zone: Zone = {
    id: 13,
    name: "Zone 1",
    icon: {
      id: 1,
      fileName: "leaf.png"
    },
    suspended: false,
    status: {
      running: false
    }
  };

  const onPressMock = jest.fn();

  render(<ZoneDetails zone={zone} onIconClick={onPressMock} />);
  fireEvent.press(screen.getByTestId("iconPressable"));
  expect(onPressMock.mock.calls).toHaveLength(1);
});

test("renders ZoneDetails with with icon", () => {
  zone.icon = {
    id: 1,
    fileName: "leaf.png"
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("leaf.png")).toBeOnTheScreen();
});

test("renders ZoneDetails with no icon", () => {
  zone.icon = {
    id: 1,
    fileName: null
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("no-image.png")).toBeOnTheScreen();
});
