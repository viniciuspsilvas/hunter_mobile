import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useData, useZoneActions } from "../hooks";
import { Zone } from "../types";
import ControllerDetails from "./ControllerDetails";

type Props = {};

export function Home({}: Props) {
  const { data } = useData();
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
        <ControllerDetails controller={data} onZoneClick={handleZoneClick} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
