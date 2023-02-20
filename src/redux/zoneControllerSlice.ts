import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Controller, Zone } from "../types";

import { RootState } from "./store";

export interface ZoneControllerState {
  data: Controller;
  error: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: ZoneControllerState = {
  data: {},
  error: null,
  status: "idle"
};

export const zoneControllerSlice = createSlice({
  name: "zoneController",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setData: (state, action: PayloadAction<Controller>) => {

      state.data = action.payload;
      state.status = "idle";

      // // Simulate a catching error
      // try {
      //   state.status = "loading";
      //   state.data = action.payload;
      //   state.status = "idle";
      // } catch (error) {
      //   state.status = "loading";
      //   state.error = `${error}`;
      //   state.status = "failed";
      // }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    toggleZoneStatus: (state, action: PayloadAction<Zone>) => {
      const zones = state.data.zones;

      if (zones) {
        const index = zones.findIndex(
          (zone: Zone) => zone.id === action.payload.id
        );
        if (index > -1) {
          const newZones = [...zones];
          newZones[index].status = {
            running: !newZones[index].status?.running
          };
          state.data.zones = newZones;
        }
      }
    }
  }
});

export const { setData, setError, toggleZoneStatus } =
  zoneControllerSlice.actions;

export const getData = (state: RootState) => state.zoneController.data;

export default zoneControllerSlice.reducer;
