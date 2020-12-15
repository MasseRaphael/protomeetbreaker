import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  var colors = ["#262484", "#eb5674", "#f1b710", "#37b491"];
  var color = colors[Math.floor(Math.random() * Math.floor(4))];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <TouchableOpacity style={{
          backgroundColor: "white",
          padding: 40,
          borderRadius: 150,
      }}>
        <Text style={{
            fontSize: 100,
            fontWeight: 'bold',
            color: color,
            fontStyle: 'italic',
        }}>ON</Text>
        <Text style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: color,
            fontStyle: 'italic',
        }}>SE LANCE ?</Text>
      </TouchableOpacity>
    </View>
  );
}