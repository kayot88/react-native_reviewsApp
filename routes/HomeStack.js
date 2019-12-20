import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./../screens/home";
import DetailsReview from "./../screens/detailsReview";

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: DetailsReview
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
