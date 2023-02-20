import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  getData,
  setData,
  toggleZoneStatus
} from "./redux/zoneControllerSlice";

import { Zone } from "./types";

export const useData = (ref: React.MutableRefObject<boolean>) => {
  const data = useAppSelector(getData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(
            "https://raw.githubusercontent.com/viniciuspsilvas/hunter_mobile/main/assets/data.json"
          );
          const { data } = await res.json();
          dispatch(setData(data.controller));
        } catch (err: any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [ref]);
  return { loading, data, error };
};

export function useZoneActions() {
  const dispatch = useAppDispatch();

  return {
    toggleZoneStatus: (zone: Zone) => dispatch(toggleZoneStatus(zone))
  };
}
