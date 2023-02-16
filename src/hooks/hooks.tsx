import { useEffect } from "react";
import { Zone } from "../components/ZoneDetails";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getData,
  setData,
  toggleZoneStatus
} from "../redux/zoneControllerSlice";

import myData from "../../assets/data.json";

export function useData() {
  const data = useAppSelector(getData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(myData.data.controller));
    // TODO:
    // fetch("./data.json")
    //   .then((response) => response.json())
    //   .then((data) => dispatch(setData(data)))
    //   .catch((error) => console.error(error));
  }, []);

  return { data };
}

export function useZoneActions() {
  const dispatch = useAppDispatch();

  return {
    toggleZoneStatus: (zone: Zone) => dispatch(toggleZoneStatus(zone))
  };
}
