import * as React from "react";
import { useData } from "../hooks/hooks";
import { useAppDispatch } from "../redux/hooks";
import { startZone, stopZone } from "../redux/zoneControllerSlice";
import ControllerDetails from "./ControllerDetails";
import { Zone } from "./ZoneDetails";

type Props = {};

export function Home({}: Props) {
  const { data } = useData();
  const dispatch = useAppDispatch();

  const handleZoneClick = (zone: Zone) => {
    if (zone.status?.running) {
      dispatch(stopZone(zone));
    } else {
      dispatch(startZone(zone));
    }
  };

  return <ControllerDetails controller={data} onZoneClick={handleZoneClick} />;
}
