import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native-web";
import SelectButton from "./SelectButton";

function AllPlayers(props) {
  const selectedPlayer = props.selectedPlayer;
  const setSelectedPlayer = props.setSelectedPlayer;

  const [posts, setPosts] = useState({
    onlinePlayers: [],
    offlinePlayers: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/rcon/players")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <SelectButton
        list={posts.onlinePlayers}
        isDisabled={false}
        setButton={setSelectedPlayer}
      />
      <SelectButton
        list={posts.offlinePlayers}
        isDisabled={true}
        setButton={setSelectedPlayer}
      />
      <Text>Selected Player: {selectedPlayer}</Text>
    </View>
  );
}

export default AllPlayers;
