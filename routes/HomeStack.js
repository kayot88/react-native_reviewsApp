import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./../screens/home";
import DetailsReview from "./../screens/detailsReview";
import Header from "./../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='GameZone' />
      };
    }
  },
  ReviewDetails: {
    screen: DetailsReview,
    navigationOptions: {
      title: "Review"
      // headerStyle: {
      //   backgroundColor: "#333"
      // }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#854",
    headerStyle: {
      backgroundColor: "#333",
      height: 60
    }
  }
});

export default HomeStack;
