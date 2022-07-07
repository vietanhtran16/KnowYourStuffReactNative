import React, { useState } from "react";
import { Dialog, TextInput, Button } from "react-native-paper";
import { useMutation } from "react-query";
import { createPlatform, NewPlatform } from "../services/api";

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export const AddPlatformModal: React.FC<Props> = ({ visible, onDismiss }) => {
  const [newPlatform, setNewPlatform] = useState({ name: "", description: "" });
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
          value={newPlatform.name}
          onChangeText={(text) =>
            setNewPlatform({ ...newPlatform, name: text })
          }
        />
        <TextInput
          mode="outlined"
          label="Description"
          placeholder="Description"
          value={newPlatform.description}
          onChangeText={(text) =>
            setNewPlatform({ ...newPlatform, description: text })
          }
        />
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button
            disabled={isLoading}
            onPress={() => {
              mutate(newPlatform);
              setNewPlatform({ name: "", description: "" });
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
