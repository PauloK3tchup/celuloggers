import { StyleSheet, Text, View, FlatList } from "react-native";
import ItemLista from "./ItemLista";
export default function Listagem() {
  const foods = [
    { nome: "Pão", preço: "20 reais" },
    { nome: "Carne", preço: "300 reais" },
    { nome: "Sua mãe", preço: "400 reais" },
    { nome: "Mercurio", preço: "420 reais" },
    { nome: "Fogos de artificio", preço: "50 reais" },
    { nome: "Armas de fogo", preço: "150 reais" },
    { nome: "Azeite de oliva", preço: "4 reais" },
    { nome: "Pãozão de queijo", preço: "1.5 reais" },
    { nome: "A NASA inteira", preço: "50.76 reais" },
    { nome: "Morbius 4K", preço: "-7 reais" },
    { nome: "Plutão", preço: "11 reais" },
    { nome: "Mauricio", preço: "NaN reais" },
  ];

  return (
    <View>
      <Text style={styles.fundoTabela}>Item | Preço</Text>
      <FlatList
        data={foods}
        renderItem={({ item }) => <ItemLista comida={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fotoPequena: {
    width: 120,
    height: 100,
  },
  fundoTabela: {
    width: 200,
    height: 30,
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 5,
  },
});
