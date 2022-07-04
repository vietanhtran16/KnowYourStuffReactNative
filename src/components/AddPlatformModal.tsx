import React, { useState } from "react";
import { Dialog, TextInput, Button } from "react-native-paper";

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export const AddPlatformModal: React.FC<Props> = ({ visible, onDismiss }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Add new platform</Dialog.Title>
      <Dialog.Content>
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          mode="outlined"
          label="Description"
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button
            onPress={() => {
              console.log("name", name);
              console.log("description", description);
              onDismiss();
            }}
          >
            Add
          </Button>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog>
  );
};
