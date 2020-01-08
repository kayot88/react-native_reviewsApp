import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "./../screens/about";
import Header from "./../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#854",
    headerStyle: {
      backgroundColor: "#333"
    }
  }
});

export default AboutStack;
