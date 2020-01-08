import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./../shared/card";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "eeegeas", rating: 5, body: "lorem1", key: "1" },
    { title: "2eeegeas", rating: 3, body: "lorem2", key: "2" },
    { title: "3eeegeas", rating: 1, body: "lorem3", key: "3" }
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.textTitle}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
