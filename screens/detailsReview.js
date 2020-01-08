import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles, Rate } from "./../styles/global";
import Card from "./../shared/card";

const DetailsReview = ({ navigation }) => {
  const rating = navigation.getParam("rating");
  return (
    <Card style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("key")}</Text>
        <Text>{navigation.getParam("title")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={Rate.ratings[rating]} />
        </View>
      </Card>
    </Card>
  );
};
const styles = StyleSheet.create({
  rating:{
    flexDirection: 'row',
    paddingTop: 16,
    marginTop: 16,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})

export default DetailsReview;
