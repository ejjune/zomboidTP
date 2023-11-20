import { useState } from "react";
import { Text } from "react-native-web";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import TeleportTo from "./components/TeleportTo";
import TeleportToCoords from "./components/TeleportToCoords";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const [selectedToPlayer, setSelectedToPlayer] = useState("");

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <table>
        <thead>Online Players</thead>
        <tbody>
          <th>
            <AllPlayers
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          </th>
          <tr>
            <Text>Selected Player: {selectedPlayer}</Text>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>To Players</thead>
        <tbody>
          <th>
            <AllPlayers
              selectedPlayer={selectedToPlayer}
              setSelectedPlayer={setSelectedToPlayer}
            />
          </th>
          <tr>
            <Text>Selected To Player: {selectedToPlayer}</Text>
          </tr>
        </tbody>
      </table>
      <TeleportTo userFrom={selectedPlayer} userTo={selectedToPlayer} />
      <table>
        <thead>To Coordinate</thead>
        <tbody>
          <th>
            <TeleportToCoords user={selectedPlayer} />
          </th>
        </tbody>
      </table>
      {/* <table>
        <thead>To Player</thead>
        <tbody>
          <TeleportTo
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </tbody>
      </table>
      <AddItems item={selectedItem} user={selectedPlayer} /> */}
    </>
  );
}

export default App;
