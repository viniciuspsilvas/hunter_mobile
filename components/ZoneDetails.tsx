import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export type Zone = {
  id?: number;
  name?: string;
  icon?: {
    id?: number;
    fileName?: string;
  };

  status?: {
    running?: boolean;
  };
};

export interface ZoneDetailsProps {
  zone: Zone;
  onIconClick: () => void;
}

export const ZoneDetails = ({ onIconClick, zone }): ZoneDetailsProps => {
  return (
    <View style={styles.container}>
      <Text testID="title">I am a zone details page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ZoneDetails;
