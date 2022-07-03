import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Title, TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
  },
});

export const Home = () => {
  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <Title>Add Platform</Title>
        <TextInput mode="outlined" label="Name" placeholder="Name" />
        <TextInput
          mode="outlined"
          label="Description"
          placeholder="Description"
        />
      </View>
    </ScrollView>
  );
};
