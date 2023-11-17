import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native-web";
import SelectButton from "./SelectButton";

function AllItems(props) {
  const selectedItem = props.selectedItem;
  const setSelectedItem = props.setSelectedItem;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/rcon/item")
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
        list={posts}
        isDisabled={false}
        setButton={setSelectedItem}
      />
      <Text>Selected Item: {selectedItem}</Text>
    </View>
  );
}

export default AllItems;
