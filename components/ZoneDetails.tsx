import * as React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export type Zone = {
  id?: number;
  name: string;
  icon?: {
    id?: number;
    fileName?: string;
  };
  suspended?: boolean;
  status?: {
    running?: boolean;
  };
};

export interface ZoneDetailsProps {
  zone: Zone;
  onIconClick: () => void;
}

export const ZoneDetails = ({ zone, onIconClick }: ZoneDetailsProps) => {
  const icon = zone.status?.running ? (
    <Image
      testID="runningIcon"
      style={styles.image}
      source={require("./images/running.png")}
    />
  ) : (
    <Image
      testID="image"
      style={styles.image}
      source={require("./images/leaf.png")}
    />
  );

  return (
    <View style={styles.container}>
      <Pressable testID="iconPressable" onPress={onIconClick}>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 50,
    height: 50,
    // backgroundColor: "#0553"
    resizeMode: "stretch"
  }
});

export default ZoneDetails;
