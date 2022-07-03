import React from "react";
import { Dialog, TextInput, Button } from "react-native-paper";

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export const AddPlatformModal: React.FC<Props> = ({ visible, onDismiss }) => (
  <Dialog visible={visible} onDismiss={onDismiss}>
    <Dialog.Title>Add new platform</Dialog.Title>
    <Dialog.Content>
      <TextInput mode="outlined" label="Name" placeholder="Name" />
      <TextInput
        mode="outlined"
        label="Description"
        placeholder="Description"
      />
      <Dialog.Actions>
        <Button onPress={onDismiss}>Cancel</Button>
        <Button onPress={onDismiss}>Add</Button>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog>
);
