import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./src/components/Header";
import Listagem from "./src/components/Listagem";

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="Lista beastica" subtitulo="Haha jonathan" />
      <Text>Mr.</Text>
      <Image style={styles.fotoPequena} source={require("./assets/MR.jpg")} />
      <Text>Beast</Text>
      <Listagem />
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
    // justifyContent: "center", alinha o header no meio haha
  },
  fotoPequena: {
    width: 120,
    height: 100,
  },
});
