import React from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "./../styles/global";
import FlatButton from "../shared/flatButton";
import * as yup from "yup";
const AddForm = ({ addReview }) => {
  const reviewSchema = yup.object({
    title: yup
      .string()
      .required()
      .min(4),
    body: yup
      .string()
      .required()
      .min(6),
    rating: yup
      .string()
      .required()
      .test("is num 1-5 char", "Rating must be between 1 and 5", val => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      })
  });

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              placeholder="Review title"
              style={globalStyles.input}
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              placeholder="Review body"
              style={globalStyles.input}
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              placeholder="Rating 1-5"
              style={globalStyles.input}
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton onPress={props.handleSubmit} text="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddForm;
