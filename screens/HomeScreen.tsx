import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { RootStackParamList } from "../types";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Lottie" onPress={() => navigation.push("Lottie")} />
      <Button title="Moti" onPress={() => navigation.push("Moti")} />
      <Button
        title="ScrollHeader"
        onPress={() => navigation.push("ScrollHeader")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: "90%",
    height: 50,
    margin: 10,
    backgroundColor: "#00b894",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
