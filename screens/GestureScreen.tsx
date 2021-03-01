import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder } from "react-native";

const SWIPE_THRESHOLD = 100;

export const GestureScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      // must be false (https://github.com/facebook/react-native/issues/13377)
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        Animated.timing(pan, {
          toValue: {
            x: 500,
            y: gestureState.dy + 200 * Math.sign(gestureState.dy),
          },
          duration: 300,
          useNativeDriver: true,
        }).start(() => pan.setValue({ x: 0, y: 0 }));
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        Animated.timing(pan, {
          toValue: {
            x: -500,
            y: gestureState.dy + 200 * Math.sign(gestureState.dy),
          },
          duration: 300,
          useNativeDriver: true,
        }).start(() => pan.setValue({ x: 0, y: 0 }));
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
            {
              rotate: pan.x.interpolate({
                inputRange: [-100, 0, 100],
                outputRange: [-0.5, 0, 0.5],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 500,
    width: 300,
    backgroundColor: "#00b894",
    borderRadius: 20,
  },
});
