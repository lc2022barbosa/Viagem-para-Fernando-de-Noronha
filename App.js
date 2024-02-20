import { SafeAreaView, Text, StyleSheet } from 'react-native'
export default function App() {
  return (
    <SafeAreaView>
     <Text style={styles.titulo}>Bem-vindo a Fernado de Noronha</Text>
     <Text> Descubra o paraiso das praias intocadas e aguas as cristalinas.</Text>
     <Text style={styles.subtitulo}>Explore as Maravinhosas Praias </Text>
     <Text>Visite as praias de Fernado de Noronha e mergulhe nas aguas azul-turquesa.</Text>
     <Text style={styles.subtitulo}>Reserve sua Viagem</Text>
     <Text style={styles.subtitulo}>2024 Fernado de Noronha Turismo</Text>


       </SafeAreaView>
    )
   } 

   const styles =StyleSheet.create ({
     subtitulo: {
       fontSize: 18 ,
       color: '#ffffff' ,
       textAlign: 'center' ,
       fontWeight: 'bold' ,
       backgroundColor: '#ed7000' ,
       padding: 15 ,
       marginTop: 23 ,


     },

     titulo: {

       color:'white' ,
       fontWeight: 'bold' ,
       height: 50 ,
       textAlign: 'center' ,
       padding: 17,
       marginTop: 30,
       backgroundColor: '#008000' ,
     },
   })   
