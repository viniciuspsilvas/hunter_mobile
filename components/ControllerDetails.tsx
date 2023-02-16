import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Zone } from "./ZoneDetails";

export type Controller = {
  id?: number;
  zones: Zone[];
};

export interface ControllerDetailsProps {
  controller: Controller;
}

export const ControllerDetails: FC<ControllerDetailsProps> = ({
  controller
}) => {
  return (
    <View style={styles.container}>
      <Text>I am a controller details page!</Text>

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

export default ControllerDetails;
