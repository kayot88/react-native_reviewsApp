import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "./../styles/global";
import Card from "./../shared/card";

const DetailsReview = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
        <Text>{navigation.getParam("key")}</Text>
      </Card>
    </View>
  );
};

export default DetailsReview;
