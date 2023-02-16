import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import ZoneDetails, { Zone } from "../src/components/ZoneDetails";

test("renders 'name' property", () => {
  const zone: Zone = {
    id: 13,
    name: "Zone 1",
    icon: {
      id: 1,
      fileName: "leaf.png"
    },
    suspended: false,
    status: {
      running: true
    }
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toHaveTextContent("Zone 1");
});

test("renders 'suspended' equals 'true", () => {
  const zone: Zone = {
    id: 13,
    name: "Zone 1",
    icon: {
      id: 1,
      fileName: "leaf.png"
    },
    suspended: true,
    status: {
      running: true
    }
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("suspended")).toHaveTextContent("Suspended: True");
});

test("renders 'suspended' equals 'false", () => {
  const zone: Zone = {
    id: 13,
    name: "Zone 1",
    icon: {
      id: 1,
      fileName: "leaf.png"
    },
    suspended: false,
    status: {
      running: true
    }
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("suspended")).toHaveTextContent("Suspended: False");
});

test("renders ZoneDetails with status.running = true", () => {
  const zone: Zone = {
    id: 13,
    name: "Zone 1",
    icon: {
      id: 1,
      fileName: "leaf.png"
    },
    suspended: false,
    status: {
      running: true
    }
  };

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toBeOnTheScreen();
  expect(screen.getByTestId("runningIcon")).toBeOnTheScreen();
  expect(screen.getByTestId("suspended")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toHaveTextContent("Running: True");
});

test("renders ZoneDetails with status.running = false", () => {
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

  const mockCallback = jest.fn();
  render(<ZoneDetails zone={zone} onIconClick={mockCallback} />);

  expect(screen.getByTestId("name")).toBeOnTheScreen();
  expect(screen.getByTestId("image")).toBeOnTheScreen();
  expect(screen.getByTestId("suspended")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toBeOnTheScreen();
  expect(screen.getByTestId("status")).toHaveTextContent("Running: False");
});


test("renders ZoneDetails onIconClick function", () => {
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
