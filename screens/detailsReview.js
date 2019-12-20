import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "./../styles/global";

const DetailsReview = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Text>{navigation.getParam("key")}</Text>
    </View>
  );
};

export default DetailsReview;
