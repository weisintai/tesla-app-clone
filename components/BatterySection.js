import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BatterySection = () => {
  return (
    <View style={styles.batterySection}>
      <Image
        source={require("../assets/battery.png")}
        style={styles.batteryImage}
      />
      <Text style={styles.batteryText}>150 mi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default BatterySection;
