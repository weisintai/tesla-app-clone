import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

const ControlIcons = () => {
  const [locked, setLocked] = useState(false);

  const toggleLock = () => setLocked(!locked);

  return (
    <View style={styles.controlsContainer}>
      <View style={styles.controlButtons}>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesomeIcon icon={faFan} size={24} color={"white"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesomeIcon icon={faKey} size={24} color={"white"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLock}>
          <View style={styles.controlButton}>
            <FontAwesomeIcon
              icon={locked ? faLock : faUnlockAlt}
              size={24}
              color={"white"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 175,
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  controlButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
  },
});

export default ControlIcons;
