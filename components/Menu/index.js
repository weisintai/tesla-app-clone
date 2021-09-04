import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import items from "./items";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} size={24} color={"white"} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.menuSubText}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={24}
              color={"#4D4D4E"}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuTextBox: {
    flexGrow: 1,
    marginLeft: 15,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  menuSubText: {
    color: "gray",
    fontSize: 14,
  },
});

export default Menu;
