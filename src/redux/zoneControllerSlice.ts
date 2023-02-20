import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Controller, Zone } from "../types";

import { RootState } from "./store";

export interface ZoneControllerState {
  data: Controller;
}

const initialState: ZoneControllerState = {
  data: {}
};

export const zoneControllerSlice = createSlice({
  name: "zoneController",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setData: (state, action: PayloadAction<Controller>) => {
      state.data = action.payload;
    },

    toggleZoneStatus: (
      { data: { zones } },
      { payload }: PayloadAction<Zone>
    ) => {
      if (zones) {
        const index = zones.findIndex((zone: Zone) => zone.id === payload.id);
        if (index > -1) {
          const newZones = [...zones];
          const selectedZone = newZones[index];
          selectedZone.status = {
            running: !selectedZone.status?.running
          };
        }
      }
    }
  }
});

export const { setData, toggleZoneStatus } = zoneControllerSlice.actions;

export const getData = (state: RootState) => state.zoneController.data;

export default zoneControllerSlice.reducer;
