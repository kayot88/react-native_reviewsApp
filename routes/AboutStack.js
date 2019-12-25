import { createStackNavigator } from "react-navigation-stack";
import About from './../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About GameZone",
      headerStyle: {
        backgroundColor: "#333"
      }
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
