import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Provider } from "react-redux";
import { Home } from "./src/components/Home";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} testID="app">
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 25,
    fontWeight: "500"
  }
});

export default App;
