import axios from "axios";
import { useState } from "react";
import { Button, Text, View } from "react-native-web";

function AddItems(props) {
  const item = props.item;
  const user = props.user;

  const [posts, setPosts] = useState([]);

  const addItem = (user, item) => {
    axios
      .get("http://crabpro.net:8080/rcon/item/" + user + "/" + item)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <Button title="Add Item" onPress={() => addItem(user, item)} />
      <Text>Message: {posts}</Text>
    </View>
  );
}

export default AddItems;
