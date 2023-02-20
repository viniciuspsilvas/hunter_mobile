import { FC, PropsWithChildren } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Controller, Zone } from "../types";
import ZoneDetails from "./ZoneDetails";

export interface ControllerDetailsProps extends PropsWithChildren {
  children?: React.ReactNode;
  controller: Controller;
  onZoneClick: (zone: Zone) => void;
}

export const ControllerDetails: FC<ControllerDetailsProps> = ({
  controller,
  onZoneClick
}) => {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      data={controller.zones}
      renderItem={({ item }) => (
        <ZoneDetails zone={item} onIconClick={onZoneClick} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    flexGrow: 1,
    alignItems: "center"
  }
});

export default ControllerDetails;
