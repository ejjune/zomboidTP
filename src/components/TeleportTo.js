import axios from "axios";
import { useState } from "react";
import { Button, Text, View } from "react-native-web";

function TeleportTo(props) {
  const userFrom = props.userFrom;
  const userTo = props.userTo;

  const [posts, setPosts] = useState([]);

  const TeleportTo = (userFrom, userTo) => {
    axios
      .get("http://crabpro.net:8080/rcon/teleport/" + userFrom + "/" + userTo)
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
        <Button
          title="TeleportPlayer"
          onPress={() => TeleportTo(userFrom, userTo)}
        />
      </View>
      <Text>Message: {posts}</Text>
    </View>
  );
}

export default TeleportTo;
