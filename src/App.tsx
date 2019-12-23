import React from "react";
import { Header } from "./modules/Layout/Header/Container";
import { loadTheme } from "@uifabric/styling";
import { HomeWrapped } from "./modules/Home/DisplayContainer";

loadTheme({
  palette: {
    themePrimary: "#5fd400",
    themeLighterAlt: "#040800",
    themeLighter: "#0f2200",
    themeLight: "#1d3f00",
    themeTertiary: "#397f00",
    themeSecondary: "#54ba00",
    themeDarkAlt: "#6dd816",
    themeDark: "#81de35",
    themeDarker: "#a0e766",
    neutralLighterAlt: "#282828",
    neutralLighter: "#313131",
    neutralLight: "#3f3f3f",
    neutralQuaternaryAlt: "#484848",
    neutralQuaternary: "#4f4f4f",
    neutralTertiaryAlt: "#6d6d6d",
    neutralTertiary: "#9d9d9d",
    neutralSecondary: "#838383",
    neutralPrimaryAlt: "#6a6a6a",
    neutralPrimary: "#ebebeb",
    neutralDark: "#363636",
    black: "#1c1c1c",
    white: "#1f1f1f"
  }
});

const App: React.FC = () => {
  return (
    <div className="App ms-Fabric">
      <Header />
      <HomeWrapped />
    </div>
  );
};

export default App;
