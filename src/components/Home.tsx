import * as React from "react";
import { useData, useZoneActions } from "../hooks/hooks";
import ControllerDetails from "./ControllerDetails";
import { Zone } from "./ZoneDetails";

type Props = {};

export function Home({}: Props) {
  const { data } = useData();
  const { toggleZoneStatus } = useZoneActions();

  const handleZoneClick = (zone: Zone) => {
    toggleZoneStatus(zone);
  };

  return <ControllerDetails controller={data} onZoneClick={handleZoneClick} />;
}
