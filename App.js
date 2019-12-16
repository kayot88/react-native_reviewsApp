import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [stateFonts, setStateFonts] = useState(false);
  if (!stateFonts) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setStateFonts(true)} />
    );
  } else {
    return <Home />;
  }
}

const getFonts = () =>
  Font.loadAsync({
    'nunitoRegular': require("./assets/fonts/Nunito-Regular.ttf"),
    'nunitoBold': require("./assets/fonts/Nunito-Bold.ttf"),
    'girassolRegular': require("./assets/fonts/Girassol-Regular.ttf")
  });

