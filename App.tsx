import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./src/pages/Home";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Header />
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
