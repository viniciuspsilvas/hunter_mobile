import { useEffect, useState } from "react";
import { Controller } from "../components/ControllerDetails";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getData, setData, startZone } from "../redux/zoneControllerSlice";

const DATA = {
  id: 1,
  zones: [
    {
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
    },
    {
      id: 14,
      name: "Zone 2",
      icon: {
        id: 1,
        fileName: "leaf.png"
      },
      suspended: true,
      status: {
        running: false
      }
    },
    {
      id: 7834,
      name: "Zone 3",
      icon: {
        id: 1,
        fileName: null
      },
      suspended: false,
      status: {
        running: false
      }
    },
    {
      id: 7843,
      name: "Zone 4",
      icon: {
        id: 1,
        fileName: "leaf.png",
        customImage: null
      },
      suspended: false,
      status: {
        running: false
      }
    },
    {
      id: 7844,
      name: "Zone 5",
      icon: {
        id: 1,
        fileName: "leaf.png"
      },
      suspended: false,
      status: {
        running: false
      }
    }
  ]
};

export function useData() {
  const data = useAppSelector(getData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(DATA));
    // TODO:
    // fetch("./data.json")
    //   .then((response) => response.json())
    //   .then((data) => dispatch(setData(data)))
    //   .catch((error) => console.error(error));
  }, []);

  return { data };
}

export function useStartZone() {
  const dispatch = useAppDispatch();
  
  return { startZone: () => dispatch(startZone) };
}
