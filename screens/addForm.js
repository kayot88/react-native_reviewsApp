import React from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "./../styles/global";
const AddForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              placeholder="Review title"
              style={globalStyles.input}
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              placeholder="Review body"
              style={globalStyles.input}
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              placeholder="Rating 1-5"
              style={globalStyles.input}
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddForm;
