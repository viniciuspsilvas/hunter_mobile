import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  getData,
  setData,
  toggleZoneStatus
} from "./redux/zoneControllerSlice";

import myData from "../assets/data.json";
import { Zone } from "./types";

export function useData() {
  const data = useAppSelector(getData);
  const loading = useRef(true);

  const dispatch = useAppDispatch();

  useEffect(() => {

    // Simulate a fetching request
    const timer = setTimeout(
      () => dispatch(setData(myData.data.controller)),
      2000
    );
    loading.current = false;
    return () => clearTimeout(timer);
  }, []);

  return { data, loading: loading.current };
}

export function useZoneActions() {
  const dispatch = useAppDispatch();

  return {
    toggleZoneStatus: (zone: Zone) => dispatch(toggleZoneStatus(zone))
  };
}
