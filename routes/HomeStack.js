import { createStackNavigator } from "react-navigation-stack";
import Home from "./../screens/home";
import DetailsReview from "./../screens/detailsReview";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      headerStyle: {
        backgroundColor: "#333"
      }
    }
  },
  ReviewDetails: {
    screen: DetailsReview,
    navigationOptions: {
      title: "Review",
      headerStyle: {
        backgroundColor: "#333"
      }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#854",
    headerStyle: {
      backgroundColor: "#333"
    }
  }
});

export default HomeStack;
