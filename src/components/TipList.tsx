import { ActivityIndicator, Colors, List, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import { getPlatformTips } from "../services/api";
import React from "react";

const styles = StyleSheet.create({
  loading: {
    marginTop: 4,
  },
  tipContainer: {
    marginHorizontal: 12,
  },
  tipSnippet: {
    padding: 12,
    backgroundColor: "#CCCCCC",
    borderRadius: 12,
  },
});

interface Props {
  platformId: string;
}

export const TipList: React.FC<Props> = ({ platformId }) => {
  const { data: tips } = useQuery(`platforms-${platformId}-tips`, () =>
    getPlatformTips(platformId)
  );
  if (!tips) {
    return (
      <ActivityIndicator
        style={styles.loading}
        animating={true}
        size="small"
        color={Colors.blue400}
      />
    );
  }
  return (
    <>
      {tips.map(({ id, description, snippet }) => (
        <View key={id} style={styles.tipContainer}>
          <Text>{description}</Text>
          <Text style={styles.tipSnippet}>{snippet}</Text>
        </View>
      ))}
    </>
  );
};
