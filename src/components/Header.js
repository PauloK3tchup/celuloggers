import { StyleSheet, Text, View } from "react-native";
export default function Header(props) {
  ///Destruct (Usar só o nome do props ex:{pog})
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.titulo}</Text>
      <Text style={styles.subText}>{props.subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    padding: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 35,
  },
  subText: {
    color: "white",
    fontSize: 15,
  },
});
