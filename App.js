import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Mr.</Text>
      <Image style={styles.fotoPequena} source={require("./assets/MR.jpg")} />
      <Text>Beast</Text>
      <Image
        style={styles.fotoPequena}
        source={require("./assets/Trollface.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF06F4",
    alignItems: "center",
    justifyContent: "center",
  },
  fotoPequena: {
    width: 220,
    height: 200,
  },
});
