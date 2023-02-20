import * as React from "react";
import { StyleSheet, Text } from "react-native";

export const NoDataFound = () => {
  return (
    <Text testID="dataNotFound" style={styles.text}>
      Data not found.
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFF"
  }
});

export default NoDataFound;
