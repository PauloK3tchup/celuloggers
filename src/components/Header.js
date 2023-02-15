import { StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Lista beastica</Text>
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
});
