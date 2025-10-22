import React, { useState } from "react";
import Navi from "./components/Navi";
import * as ExpoFont from "expo-font";
import AppLoading from "expo-app-loading";

const fontsLoad = () =>
  ExpoFont.loadAsync({
    "onest-reg": require("./assets/fonts/Onest/Onest-Regular.ttf"),
    "onest-bold": require("./assets/fonts/Onest/Onest-Bold.ttf"),
  });

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const returnJSX = <Navi />;

  /*const appLoadingJSX = (
    <AppLoading
      startAsync={fontsLoad}
      onFinish={() => setFontsLoaded(true)}
      onError={(error) => console.log(error)}
    />
  );

  return isFontsLoaded ? returnJSX : appLoadingJSX;*/
  return returnJSX;
}