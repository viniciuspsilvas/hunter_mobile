import { FC, PropsWithChildren } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`${"Welcome to \nZONE Controllers\napp!"}`}</Text>
      <FlatList
        numColumns={2}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        style={styles.listContainer}
        data={controller.zones}
        renderItem={({ item }) => (
          <ZoneDetails zone={item} onIconClick={onZoneClick} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFF",
    marginVertical: 30
  },
  listContainer: {
    width: "100%",
    flex: 1,
  }
});

export default ControllerDetails;
