import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useData, useZoneActions } from "../customHooks";
import { Zone } from "../types";
import ControllerDetails from "./ControllerDetails";
import CustomSpinner from "./CustomSpinner";

type Props = {};

export function Home({}: Props) {
  const componentIsMounted = React.useRef(true);

  const { data, loading } = useData(componentIsMounted);
  const { toggleZoneStatus } = useZoneActions();

  const handleZoneClick = (zone: Zone) => {
    toggleZoneStatus(zone);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <Text
            style={styles.text}
          >{`${"Welcome to \nZONE Controllers\napp!"}`}</Text>

          {loading ? (
            <CustomSpinner />
          ) : (
            <ControllerDetails
              controller={data}
              onZoneClick={handleZoneClick}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFF",
    marginVertical: 30,
    paddingHorizontal: 60,
    width: "100%"
  }
});
