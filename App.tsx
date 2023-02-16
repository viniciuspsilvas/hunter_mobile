import * as React from "react";
import { Alert, SafeAreaView, StyleSheet } from "react-native";
import ControllerDetails from "./components/ControllerDetails";

const controller = {
  id: 1,
  zones: [
    {
      id: 13,
      name: "Zone 1",
      icon: {
        id: 1,
        fileName: "leaf.png"
      },
      suspended: false,
      status: {
        running: true
      }
    },
    {
      id: 14,
      name: "Zone 2",
      icon: {
        id: 1,
        fileName: "leaf.png"
      },
      suspended: true,
      status: {
        running: false
      }
    },
    {
      id: 7834,
      name: "Zone 3",
      icon: {
        id: 1,
        fileName: null
      },
      suspended: false,
      status: {
        running: false
      }
    },
    {
      id: 7843,
      name: "Zone 4",
      icon: {
        id: 1,
        fileName: "leaf.png",
        customImage: null
      },
      suspended: false,
      status: {
        running: false
      }
    },
    {
      id: 7844,
      name: "Zone 5",
      icon: {
        id: 1,
        fileName: "leaf.png"
      },
      suspended: false,
      status: {
        running: false
      }
    }
  ]
};

const App = () => {
  const handleZoneClick = () => {
    Alert.alert("Clicked!");
  };

  return (
    <SafeAreaView style={styles.container} testID="app">
      <ControllerDetails
        controller={controller}
        onZoneClick={handleZoneClick}
      />
    </SafeAreaView>
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
