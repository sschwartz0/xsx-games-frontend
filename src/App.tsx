import React, { useState, useEffect } from "react";
import { Header } from "./modules/Layout/Header/Container";
import { loadTheme } from "@uifabric/styling";
import { HomeWrapped } from "./modules/Home/DisplayContainer";
import { useStore } from "./providers/StoreProvider";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setId] = useState("3498");
  const {
    reducer,
    gamesApiGet: { game },
  } = useStore("games");
  useEffect(() => {
    game(id);

    return;
  }, [id, game]);

  const currentGame = reducer.current;

  const poop = () => setId("3496");

  const poop2 = () => setId("3497");

  console.log({ currentGame });

  return (
    <div className="App ms-Fabric">
      <button onClick={poop}>Test</button>
      <button onClick={poop2}>Test</button>
      <button onClick={() => setLoggedIn(true)}>Test</button>
      <Header loggedIn={loggedIn} />
      <HomeWrapped />
    </div>
  );
};

export default App;
