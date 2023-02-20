import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Zone } from "../types";
import { ZoneImage } from "./ZoneImage";

export interface ZoneDetailsProps {
  zone: Zone;
  onIconClick: (zone: Zone) => void;
}

export const ZoneDetails = ({ zone, onIconClick }: ZoneDetailsProps) => {
  const isRunning = !!zone.status?.running;
  const isSuspended = !!zone.suspended;

  const icon = isRunning ? (
    <ActivityIndicator
      testID="runningIcon"
      size="large"
      color="#F0EA4B"
      style={{ margin: 7 }}
    />
  ) : (
    ZoneImage.GetImage(zone.icon?.fileName)
  );

  const handleOnClick = () => {
    if (isSuspended) {
      Alert.alert("This zone is SUSPENDED", "You can not run it.");
    } else {
      onIconClick(zone);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isSuspended
          ? { backgroundColor: "#BA8181" }
          : isRunning
          ? { backgroundColor: "#C3B847" }
          : { backgroundColor: "#83B99E" }
      ]}
    >
      <TouchableOpacity testID="iconPressable" onPress={handleOnClick}>
        {icon}
      </TouchableOpacity>

      <Text style={styles.name} testID={`zoneName${zone.id}`}>
        {zone.name}
      </Text>
      {isSuspended && (
        <Text style={styles.text} testID={`zoneSuspended${zone.id}`}>
          Suspended
        </Text>
      )}

      {isRunning && (
        <Text style={styles.text} testID={`zoneStatus${zone.id}`}>
          Running...
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 2
    },
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    width: 120,
    height: 120,
    margin: 10
  },
  name: {
    fontSize: 18,
    color: "#FFF"
  },
  text: {
    fontSize: 12,
    color: "#FFF",
    fontStyle: "italic"
  }
});

export default ZoneDetails;
