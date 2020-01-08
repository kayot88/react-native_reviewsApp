import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        onPress={openMenu}
        size={28}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "red"
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginHorizontal: 5
  },
  icon: {
    position: "absolute",
    left: 16
  },
  headerLogo: {
    width: 20,
    height: 20
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Header;
