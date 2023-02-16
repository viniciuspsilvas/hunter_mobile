import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Controller } from "../components/ControllerDetails";
import { Zone } from "../components/ZoneDetails";
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
      // Simulate a catching error
      try {
        state.status = "loading";
        state.data = action.payload;
        state.status = "idle";
      } catch (error) {
        state.status = "loading";
        state.error = `${error}`;
        state.status = "failed";
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    startZone: (state, action: PayloadAction<Zone>) => {
      const zones = state.data.zones;

      if (zones) {
        const index = zones.findIndex((zone) => zone.id === action.payload.id);
        if (index > -1) {
          const newZones = [...zones];
          newZones[index].status = { running: true };
          state.data.zones = newZones;
        }
      }
    },

    stopZone: (state, action: PayloadAction<Zone>) => {
      const zones = state.data.zones;
      if (zones) {
        const index = zones.findIndex((zone) => zone.id === action.payload.id);
        if (index > -1) {
          const newZones = [...zones];
          newZones[index].status = { running: false };
          state.data.zones = newZones;
        }
      }
    }
  }
});

export const { setData, setError, startZone, stopZone } =
  zoneControllerSlice.actions;

export const getData = (state: RootState) => state.zoneController.data;

export default zoneControllerSlice.reducer;
