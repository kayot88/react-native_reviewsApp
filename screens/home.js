import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "./../shared/card";

const Home = ({ navigation }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "eeegeas", rating: 5, body: "lorem1", key: "1" },
    { title: "2eeegeas", rating: 3, body: "lorem2", key: "2" },
    { title: "3eeegeas", rating: 1, body: "lorem3", key: "3" }
  ]);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="cancel"
            onPress={() => setmodalVisible(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            size={28}
          />
          <Text>hello from modal!</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add-circle-outline"
        onPress={() => setmodalVisible(true)}
        style={{ ...styles.modalToggle, ...styles.modalClose }}
        size={28}
      />

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

const styles = StyleSheet.create({
  modalClose: {
    marginTop: 10,
    alignSelf: "center"
  },
  modalToggle: {
    padding: 10
  },
  modalContent:{
    flex: 1,
    alignItems:'center'
  }
});

export default Home;
