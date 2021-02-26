import React, { useRef } from "react";
import { Button, StyleSheet, View, Image, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function TabOneScreen() {
  const animationRef = useRef<LottieView | null>();

  const resetAnimation = () => {
    if (animationRef.current) {
      animationRef.current.reset();
      animationRef.current.play();
    }
  };

  return (
    <View style={styles.animationContainer}>
      <Text style={styles.text}>Lottie</Text>
      <View style={styles.buttonContainer}>
        <Button title="Restart Animation" onPress={resetAnimation} />
      </View>
      <LottieView
        ref={(animation) => {
          animationRef.current = animation;
        }}
        style={styles.image}
        source={require("../assets/animations/cycling.json")}
      />
      <Text style={styles.text}>Animation Gif</Text>
      <Image
        style={styles.image}
        source={require("../assets/animations/cycling.gif")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
