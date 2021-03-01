import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as Moti from "moti";

export const MotiScreen = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = () => {
    setMessages([...messages, `item ${messages.length}`]);
  };

  const resetMessages = () => {
    setMessages([]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Item" onPress={addMessage} />
      <Button title="Reset" onPress={resetMessages} />
      {messages.map((message, index) => (
        <Moti.View
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 1000 }}
          style={styles.item}
          key={index.toString()}
        >
          <Text style={styles.text}>{message}</Text>
        </Moti.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
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
