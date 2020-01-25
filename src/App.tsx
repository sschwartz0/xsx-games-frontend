import React from "react";
import { loadTheme } from "@uifabric/styling";

import { Header } from "modules/Layout/Header/Container";
import { RootRouter } from "modules/RootRouter";

loadTheme({
  palette: {
    themePrimary: "#56be00",
    themeLighterAlt: "#f7fcf2",
    themeLighter: "#dff5ce",
    themeLight: "#c5eca5",
    themeTertiary: "#91d957",
    themeSecondary: "#67c718",
    themeDarkAlt: "#4dac00",
    themeDark: "#419100",
    themeDarker: "#306b00",
    neutralLighterAlt: "#eeeeee",
    neutralLighter: "#eaeaea",
    neutralLight: "#e1e1e1",
    neutralQuaternaryAlt: "#d1d1d1",
    neutralQuaternary: "#c8c8c8",
    neutralTertiaryAlt: "#c0c0c0",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#f5f5f5",
  },
});

const App: React.FC = () => {
  return (
    <div className="App ms-Fabric">
      <Header />
      <RootRouter />
    </div>
  );
};

export default App;
