import { FC } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ZoneDetails, { Zone } from "./ZoneDetails";

export type Controller = {
  id?: number;
  zones?: Zone[];
};

export interface ControllerDetailsProps {
  controller: Controller;
  onZoneClick: () => void;
}

export const ControllerDetails: FC<ControllerDetailsProps> = ({
  controller,
  onZoneClick
}) => {
  return (
    <View style={styles.container}>
      <Text>I am a controller details page!</Text>

      {controller.zones?.map((zone, index) => (
        <ZoneDetails
          key={index}
          zone={zone}
          onIconClick={() => {
            Alert.alert("pressed");
          }}
        />
      ))}
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
