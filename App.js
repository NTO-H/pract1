import { StatusBar } from "expo-status-bar";
import { Alert,TouchableOpacity, Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';






export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Categorias />
      <Ms />
      <Apps />
      <Pie />
    </View>
  );
}



export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}>Galaxy Store</Text>
      <Icon style={styles.iconsC} name="gift" ></Icon>
      <Icon style={styles.iconsC} name="search" ></Icon>
    </View>
  );
};


export const Ms = () => {
  return (
    <TextInput style={styles.novedades} >Últimas actualizaciones de juegos</TextInput>
  );
};

export const Categorias = () => {
  return (
    <View style={styles.container_categorias}>
      <View style={styles.row}>
        <TextInput editable={false} style={styles.iconInput}>
          <Icon style={styles.iconsBolt} name="bolt" />
        </TextInput>
        <TextInput editable={false} style={styles.btn_ctg}>Destacado</TextInput>
        <TextInput editable={false} style={styles.btn_ctg}>Registro previo</TextInput>
        <TextInput editable={false} style={styles.btn_ctg}>Éxitos</TextInput>
      </View>


    </View>
  );
};
const handleDownload = () => {
  // Lógica de descarga o cualquier acción que desees realizar antes de mostrar la alerta

  // Mostrar la alerta
  Alert.alert(
    'Hola Mundo',
    '¡La descarga se ha completado!',
    [
      { text: 'OK', onPress: () => console.log('OK presionado') }
    ],
    { cancelable: false }
  );
};
export const Apps = () => {
  return (
    <View style={styles.cards}>

      <View style={styles.card1}>
        <Image style={styles.img1} source={require('./assets/survivejpg.jpg')} />
        <View style={styles.description}>


          <Text style={styles.titulo1}>Epic Games</Text>
          <Text style={styles.titulo11}>Epic games,Inc.</Text>
          <TouchableOpacity onPress={() => handleDownload()}>
            <Icon name="arrow-down" style={styles.dowl}  />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card1}>
        <Image style={styles.img1} source={require('./assets/gensis.jpeg')} />
        <View style={styles.description}>

          <Text style={styles.titulo1}>Genshin Impact</Text>
          <Text style={styles.titulo11}>COSNOSPHERE PTE,LT</Text>
          <TouchableOpacity onPress={() => handleDownload()}>
            <Icon name="arrow-down"  style={styles.dowl} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card1}>
        <Image style={styles.img1} source={require('./assets/onkai.jpeg')} />
        <View style={styles.description}>

          <Text style={styles.titulo1}>Honkai: Start Rail</Text>
          <Text style={styles.titulo11}>COSNOSPHERE PTE,LT</Text>
          <TouchableOpacity onPress={() => handleDownload()}>
            <Icon name="arrow-down" style={styles.dowl} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Login = () => {
  return (
    <View>
      <Image style={styles.img} source={require('./assets/survivejpg.jpg')} />
      <View>
        <Text editable={false} style={styles.titulo1}>Selección de editores</Text>
        <Text editable={false} style={styles.titulo}>Las Day on Eart:Survival</Text>

      </View>
      <View style={styles.detaills}>
        <Text >Right now</Text>
  
        <Text >NiceOne</Text>
        <Text >Compras en la aplicación </Text>


      </View>
      <View style={styles.inputWrapper}>
        <TextInput editable={false} style={styles.input}>Instalar</TextInput>

        <TextInput editable={false} style={styles.icon}>

          <Icon  name="bell-slash" />
        </TextInput>
      </View>


    </View>
  );
};

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>

      <Login />
    </View>
  );
};


export const Pie = () => {
  //aqui podria tener varias operaciones sin problemas
  return (
    <View style={styles.pie}>

      <Icon name="gamepad" style={styles.icons} backgroundColor="#e2e2e2"></Icon>

      <Icon name="android" style={styles.icons} ></Icon>
      <Icon name="bars" style={styles.icons}></Icon>
      {/* <Icon.Button name="download" baolor="#b5b5b5"></Icon.Button> */}
    </View>
  );
};



const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',

  },
  card1: {
    borderWidth: 1,
    borderColor: '#f8f8f8',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10, height: 200, width: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  img1: {
    width: 80,
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
    marginRight: 'auto',
    height: 80,

    resizeMode: 'cover',
  }, container_categorias: {

    marginBottom: -250
  },
  titulo1: {
    fontSize: 20,
    marginBottom: -80,
  },
  titulo11: {
    fontSize: 10,
    // marginHorizontal: 10,
    marginBottom: 'auto',
  },
  inputWrapper: {
    marginTop: -30,
    marginLeft: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },dowl:{
    
  borderRadius:50,height:30,
  textAlign:'center',padding:5,
  marginTop:10,
  backgroundColor: '#e9e9e9',
  fontSize: 20
   ,color:"#5f5f5f"
   },

  input: {
    // flex: 1,
    backgroundColor: '#626161',
    color: '#FFFFFF', width: 100,
    marginRight: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 10,
    // Tus otros estilos aquí...
  },
  novedades: {
    color: '#232323',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize:25

  },description:{
    marginTop:30
  },
  icon: {
    borderRadius: 50,
    height: 30,
    width: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#626161',
    // position: 'absolute',
    marginRight: 40,
  },
  row: {

    flexDirection: 'row',

    alignItems: 'center',
  },
  iconInput: {
    // borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#050505',
    marginTop: -550,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  iconsBolt: {
    fontSize: 20,
  },
  btn_ctg: {
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    color: '#272727',


    marginTop: -550,
    marginRight: 'auto',
    // margin: 10,
    backgroundColor: '#e9e9e9',
  },

  inputDes: {


    marginLeft: 500,
    marginTop: 200,

  },


  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titulo1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: -40, marginLeft: -50,
    color: '#000000',
    height: 30,
    width: 330,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },

  container: {
    flex: 1,
    backgroundColor: "#f3f4f4",
    alignItems: "stretch",
    justifyContent: "center",
  },
  img: {
    borderColor: 'honeydew',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 330, height: 200, marginBottom: 15, marginRight: 'auto', marginLeft: 'auto',

  },

  icons: {

    color: "rgb(52, 52, 52)",
    fontSize: 20,
  },

  iconsC: {

    marginBottom: -40,

    marginRight: 40,
    color: "rgb(52, 52, 52)",
    fontSize: 20,
  },


  texto: {
    marginTop: 50,
    color: "rgb(52, 52, 52)",
    fontSize: 30,
    marginLeft: 30,
    fontWeight: "bold",
  },
  textoP: {
    marginBottom: 10,
    color: "rgb(52, 52, 52)",
    fontSize: 30,
    fontWeight: "bold",
  },
  encabezado: {
    flex: 1.5,


    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eaeaea",
  },
  titulo: {

    backgroundColor: '#dedede',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 330, height: 100, marginTop: -25, marginLeft: 'auto',  // Empujará el componente hacia el margen derecho
    marginRight: 'auto',
  },
  titulo1: {

    fontWeight: 'bold',
    backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.54)',
    // backgroundColor: 'linear-gradient(105deg, rgb(0 249 255 / 100%) 39%, rgb(51 56 57 / 100%) 96%)',
    marginTop: -40,

    color: '#000000',
    height: 30,
    width: 330,
    marginBottom: 20,
    marginRight: 'auto', marginLeft: 'auto',

  },
  cuerpo: {
    flex: 8,
  },
  pie: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#eaeaea",
  },
  detaills: {
    marginLeft: 50,
    marginTop: -70,
  }
});

