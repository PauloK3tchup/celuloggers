import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const tasks = [
    "Gerar bobux",
    "Usar bobux",
    "Vender bobux",
    "Sonegar bobux",
    "Investir bobux",
    "Subornar autoridades (com bobux)",
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Text>Mr.</Text>
      <Image style={styles.fotoPequena} source={require("./assets/MR.jpg")} />
      <Text>Beast</Text>
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
        <Image
          style={styles.fotoPequena}
          source={require("./assets/Trollface.png")}
        />
      </View>
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
