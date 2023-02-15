import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mr.</Text>
      <Image source={require('./assets/MR.jpg')} />
      <Text>Beast</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF06F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
