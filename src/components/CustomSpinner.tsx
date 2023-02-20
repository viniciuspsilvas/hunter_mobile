import * as React from "react";
import { ActivityIndicator, Text } from "react-native";

export const CustomSpinner = () => (
  <>
    <ActivityIndicator
      testID="loading-spinner"
      color={"#CBCBCB"}
      style={{ margin: 10 }}
    />
    <Text style={{ color: "#CBCBCB" }}>Loading data...</Text>
  </>
);

export default CustomSpinner;
