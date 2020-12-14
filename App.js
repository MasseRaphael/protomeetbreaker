import * as React from "react";
import { View, Text } from "react-native";

export default function App() {
  var colors = ["#262484", "#eb5674", "#f1b710", "#37b491"]
  var color = colors[Math.floor(Math.random() * Math.floor(4))]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}
