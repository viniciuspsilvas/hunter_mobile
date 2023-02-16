import * as React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export type Zone = {
  id?: number;
  name?: string;
  icon?: {
    id?: number;
    fileName?: string | null;
  };
  suspended?: boolean;
  status?: {
    running?: boolean;
  };
};

export interface ZoneDetailsProps {
  zone: Zone;
  onIconClick: (zone: Zone) => void;
}

export const ZoneDetails = ({ zone, onIconClick }: ZoneDetailsProps) => {
  const icon = zone.status?.running ? (
    <Image
      testID="runningIcon"
      style={styles.image}
      source={require("./images/running.png")} // TODO: move images
    />
  ) : (
    <Image
      testID="image"
      style={styles.image}
      source={require("./images/leaf.png")} // TODO: change to use the zone.icon.fileName
    />
  );

  return (
    <View style={styles.container}>
      <Pressable testID="iconPressable" onPress={() => onIconClick(zone)}>
        {icon}
      </Pressable>

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1,
    width: 120,
    height: 120,
    margin: 10
  },
  image: {
    width: 50,
    height: 50,
    // backgroundColor: "#0553"
    resizeMode: "stretch"
  }
});

export default ZoneDetails;
