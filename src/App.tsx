import React from "react";
import { loadTheme } from "@uifabric/styling";

import { Header } from "modules/Layout/Header/Container";
import { RootRouter } from "modules/RootRouter";

loadTheme({
  palette: {
    themePrimary: "#5fd400",
    themeLighterAlt: "#f8fdf3",
    themeLighter: "#e2f8d0",
    themeLight: "#caf2a9",
    themeTertiary: "#99e55c",
    themeSecondary: "#70d91a",
    themeDarkAlt: "#56be00",
    themeDark: "#48a100",
    themeDarker: "#357700",
    neutralLighterAlt: "#1e1e1e",
    neutralLighter: "#111111",
    neutralLight: "#1c1c1c",
    neutralQuaternaryAlt: "#1a1a1a",
    neutralQuaternary: "#4f4f4f",
    neutralTertiaryAlt: "#181818",
    neutralTertiary: "#fcfcfc",
    neutralSecondary: "#fcfcfc",
    neutralPrimaryAlt: "#fdfdfd",
    neutralPrimary: "#fafafa",
    neutralDark: "#fefefe",
    black: "#fefefe",
    white: "#1f1f1f",
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
