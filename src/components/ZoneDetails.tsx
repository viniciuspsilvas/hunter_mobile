import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Zone } from "../types";
import { ZoneImage } from "./ZoneImage";

export interface ZoneDetailsProps {
  zone: Zone;
  onIconClick: (zone: Zone) => void;
}

export const ZoneDetails = ({ zone, onIconClick }: ZoneDetailsProps) => {
  const icon = zone.status?.running
    ? ZoneImage.GetImage("running.png")
    : ZoneImage.GetImage(zone.icon?.fileName);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="iconPressable"
        onPress={() => onIconClick(zone)}
      >
        {icon}
      </TouchableOpacity>

      <Text testID="name">{zone.name}</Text>
      <Text testID="suspended">
        Suspended: {zone.suspended ? "True" : "False"}
      </Text>
      <Text testID="status">
        Running: {zone.status?.running ? "True" : "False"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 120,
    height: 120,
    margin: 10
  }
});

export default ZoneDetails;
