import React, { useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as Moti from "moti";

export default function TabTwoScreen() {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = () => {
    setMessages([...messages, `item ${messages.length}`]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Item" onPress={addMessage} />
      {messages.map((message, index) => (
        <Moti.View
          from={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing" }}
          style={styles.item}
          key={index.toString()}
        >
          <Text style={styles.text}>{message}</Text>
        </Moti.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#dfe6e9",
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
