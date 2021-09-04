import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from "react-native";

import Header from "./components/Header";
import BatterySection from "./components/BatterySection";
import ControlIcons from "./components/ControlIcons";
import Menu from "./components/Menu";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.backgroundImage}
        >
          <Header />
          <BatterySection />
          <Text style={styles.statusText}>Parked</Text>
          <ScrollView>
            <ControlIcons />
            <Menu />
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  statusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
