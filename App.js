import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navigator from "./routes/Drawer";
// import Home from "./screens/home";
// import Navigator from './routes/HomeStack'

export default function App() {
  const [stateFonts, setStateFonts] = useState(false);
  if (!stateFonts) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setStateFonts(true)} />
    );
  } else {
    return <Navigator />;
  }
}

const getFonts = () =>
  Font.loadAsync({
    nunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    girassolRegular: require("./assets/fonts/Girassol-Regular.ttf")
  });
