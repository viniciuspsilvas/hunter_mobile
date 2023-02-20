import { ReactElement } from "react";
import { Image, StyleSheet } from "react-native";

interface IZoneImage {
  name?: string;
  image: ReactElement;
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: "stretch"
  }
});

export class ZoneImage {
  private static images: Array<IZoneImage> = [
    {
      name: "running.png",
      image: (
        <Image
          testID="runningIcon"
          style={styles.image}
          source={require("./images/running.png")}
        />
      )
    },
    {
      name: "leaf.png",
      image: (
        <Image
          testID="leaf.png"
          style={styles.image}
          source={require("./images/leaf.png")}
        />
      )
    }
  ];

  static GetImage = (name?: string | null) => {
    const found = ZoneImage.images.find((e) => e.name === name);
    return found ? (
      found.image
    ) : (
      <Image
        testID="no-image.png"
        style={styles.image}
        source={require("./images/no-image.png")}
      />
    );
  };
}
