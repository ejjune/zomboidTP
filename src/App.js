import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import AllItems from "./components/AllItems";
import AddItems from "./components/AddItem";
function App() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <AllPlayers
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />
      <AllItems selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <AddItems item={selectedItem} user={selectedPlayer} />
    </>
  );
}

export default App;
