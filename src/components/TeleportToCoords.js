import axios from "axios";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native-web";

function TeleportToCoords(props) {
  const user = props.user;
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");

  const [posts, setPosts] = useState([]);

  const TeleportTo = (user, x, y, z) => {
    axios
      .get(
        "http://crabpro.net:8080/rcon/teleport/" +
          user +
          "?x=" +
          x +
          "&y=" +
          y +
          "&z=" +
          z
      )
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={{ width: "10%" }}>X</Text>
        <TextInput
          style={{
            borderColor: "gray",
            width: "90%",
            borderWidth: 1,
          }}
          onChangeText={(e) => setX(e)}
        />
        <Text style={{ width: "10%" }}>Y</Text>
        <TextInput
          style={{
            borderColor: "gray",
            width: "90%",
            borderWidth: 1,
          }}
          onChangeText={(e) => setY(e)}
        />
        <Text style={{ width: "10%" }}>Z</Text>
        <TextInput
          style={{
            borderColor: "gray",
            width: "90%",
            borderWidth: 1,
          }}
          onChangeText={(e) => setZ(e)}
        />
        <Button
          title="Teleport To Coords"
          onPress={() => TeleportTo(user, x, y, z)}
        />
      </View>
      <Text>Message: {posts}</Text>
    </View>
  );
}

export default TeleportToCoords;
