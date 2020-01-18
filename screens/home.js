import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AddForm from "./addForm";
import { globalStyles } from "../styles/global";
import Card from "./../shared/card";

const Home = ({ navigation }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "eeegeas", rating: 5, body: "lorem1", key: "1" },
    { title: "2eeegeas", rating: 3, body: "lorem2", key: "2" },
    { title: "3eeegeas", rating: 1, body: "lorem3", key: "3" }
  ]);
  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentState => [review, ...currentState]);
    setmodalVisible(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="cancel"
              onPress={() => setmodalVisible(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              size={28}
            />
            <AddForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
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
  modalContent: {
    flex: 1,
    alignItems: "center"
  }
});

export default Home;
