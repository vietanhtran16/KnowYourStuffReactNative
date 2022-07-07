import React from "react";
import { ActivityIndicator, Colors, List } from "react-native-paper";
import { useQuery } from "react-query";
import { StyleSheet } from "react-native";
import { getPlatforms } from "../services/api";
import { TipList } from "./TipList";

const styles = StyleSheet.create({
  loading: {
    marginTop: 16,
  },
});

export const PlatformList = () => {
  const { data: platforms, isLoading } = useQuery("platforms", getPlatforms);
  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        animating={true}
        size="large"
        color={Colors.blue400}
      />
    );
  }
  return (
    <List.AccordionGroup>
      {platforms?.map(({ id, name, description }) => (
        <List.Accordion title={name} description={description} id={id}>
          <List.Item
            title={`New Tip`}
            right={(props) => <List.Icon {...props} icon="plus" />}
          />
          <TipList platformId={id} />
        </List.Accordion>
      ))}
    </List.AccordionGroup>
  );
};
