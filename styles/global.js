import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontFamily: "girassolRegular",
    fontWeight: "800",
    fontSize: 60
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    width: 350
  }
});

export const Rate = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png")
  }
};
