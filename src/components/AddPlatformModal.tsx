import React, { useState } from "react";
import { Dialog, TextInput, Button } from "react-native-paper";
import { useMutation } from "react-query";
import { createPlatform, NewPlatform } from "../services/api";

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export const AddPlatformModal: React.FC<Props> = ({ visible, onDismiss }) => {
  const [name, setName] = useState(""); // merge this and description into one since they change together
  const [description, setDescription] = useState("");
  const { mutate, isLoading } = useMutation((newPlatform: NewPlatform) =>
    createPlatform(newPlatform)
  );

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
            disabled={isLoading}
            onPress={() => {
              mutate({ name, description });
              setName("");
              setDescription("");
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
