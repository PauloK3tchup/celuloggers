import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "./src/components/Header";
// import Listagem from "./src/components/Listagem";

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="Incrível" subtitulo="Uau" />
      {/* <Listagem /> */}
      <ScrollView horizontal={true} style={styles.caixaDasFotos}>
        <View style={styles.caixaFoto}>
          <Image
            style={styles.fotoPequena}
            source={require("./assets/MR.jpg")}
          />
          <Text style={styles.textoEmbaixo}>Beaster Mist</Text>
        </View>
        <View style={styles.caixaFoto}>
          <Image
            style={styles.fotoPequena}
            source={require("./assets/Fortnite.png")}
          />
          <Text style={styles.textoEmbaixo}>Budismo.png</Text>
        </View>
        <View style={styles.caixaFoto}>
          <Image
            style={styles.fotoPequena}
            source={require("./assets/Trollface.png")}
          />
          <Text style={styles.textoEmbaixo}>Just a little trolling</Text>
        </View>
        <View style={styles.caixaFoto}>
          <Image
            style={styles.fotoPequena}
            source={require("./assets/Fortnite.jpg")}
          />
          <Text style={styles.textoEmbaixo}>Nem fudendo</Text>
        </View>
      </ScrollView>
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
    width: 100,
    height: 120,
  },
  caixaDasFotos: {
    flexWrap: "wrap",
    height: "auto",
  },
  caixaFoto: {
    margin: 10,
    padding: 10,
    backgroundColor: "#252525",
    borderRadius: 10,
  },
  textoEmbaixo: {
    textAlign: "center",
    color: "white",
    padding: 5,
    fontWeight: "bold",
    maxWidth: 120,
  },
});
