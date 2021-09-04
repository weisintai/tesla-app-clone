import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faCog} size={24} color={"white"} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Model X</Text>

      <TouchableOpacity>
        <FontAwesomeIcon icon={faToolbox} size={24} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
