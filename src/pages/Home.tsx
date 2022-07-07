import React from "react";
import { ScrollView } from "react-native";
import { Portal, FAB } from "react-native-paper";
import { AddPlatformModal } from "../components/AddPlatformModal";
import { PlatformList } from "../components/PlatformList";

export const Home = () => {
  const [isFabOpen, setIsFabOpen] = React.useState(false);
  const onStateChange = ({ open }: { open: boolean }) => setIsFabOpen(open);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <ScrollView>
      <Portal>
        <AddPlatformModal
          visible={isDialogOpen}
          onDismiss={() => setIsDialogOpen(false)}
        />
        <FAB.Group
          open={isFabOpen}
          visible
          icon="lightbulb-outline"
          actions={[
            {
              icon: "plus",
              label: "Add platform",
              onPress: () => setIsDialogOpen(true),
            },
          ]}
          onStateChange={onStateChange}
        ></FAB.Group>
      </Portal>
      <PlatformList />
    </ScrollView>
  );
};
