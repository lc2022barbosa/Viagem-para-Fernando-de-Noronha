import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
    Local files and assts can be imported by dragging and dropping them into the editor
    </Text>
    <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
  <View>
  );
}

const styles = StyleSheet.creat({
  container: {
    alignItems: 'center' ,
    justifyContent:'center' ,
    padding: 24,
  },
  paragraph: {
    margin: 24 ,
    marginTop: 0 ,
    fontSize:14 ,
    fontWeight:'bold' ,
    textAllign:'center' ,
  },
  logo: {
    height:{ 128 ,
    width: 128 ,
    }
  });      
