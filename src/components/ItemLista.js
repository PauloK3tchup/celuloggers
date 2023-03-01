import { StyleSheet, Text, View, FlatList } from "react-native";
export default function ItemLista({ comida }) {
  return (
    <Text style={styles.fundoAbaixo}>
      {comida.nome} | {comida.preço}
    </Text>
  );
}
const styles = StyleSheet.create({
  fundoAbaixo: {
    backgroundColor: "white",
    color: "blue",
    borderRadius: 5,
    textAlign: "center",
    width: 200,
    height: 30,
    padding: 5,
    marginBottom: 5,
  },
});
