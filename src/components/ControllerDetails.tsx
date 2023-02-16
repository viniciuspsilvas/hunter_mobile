import { FC, PropsWithChildren } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import ZoneDetails, { Zone } from "./ZoneDetails";

// TODO: Extract the model
export type Controller = {
  id?: number;
  zones?: Zone[];
};

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
      <Text>I am a controller details page!</Text>
      <View style={{ height: Dimensions.get("window").height * 0.25 }} />
      <FlatList
        numColumns={2}
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
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  listContainer: {}
});

export default ControllerDetails;
