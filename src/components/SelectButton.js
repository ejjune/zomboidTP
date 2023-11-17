import { Button } from "react-native-web";

function SelectButton(props) {
  const list = props.list;
  const isDisabled = props.isDisabled;
  const setButton = props.setButton;

  return (
    <>
      {list.map((e) => (
        <Button
          key={e}
          title={e}
          disabled={isDisabled}
          onPress={() => setButton(e)}
        />
      ))}
    </>
  );
}

export default SelectButton;
