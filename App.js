import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';






export default function App() {
    return (
      <View style={styles.container}>
        <Encabezado />
        <Cuerpo />
        <Categorias />
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



export const Categorias = () => {
    return (
      <View style={styles.container_categorias}>
        <View style={styles.row}>
          <TextInput style={styles.iconInput}>
            <Icon style={styles.iconsBolt} name="bolt" />
          </TextInput>
          <TextInput style={styles.btn_ctg}>Destacado</TextInput>
          <TextInput style={styles.btn_ctg}>Registro previo</TextInput>
          <TextInput style={styles.btn_ctg}>Éxitos</TextInput>
        </View>
      </View>
    );
  };
export const Apps = () => {

    return (
        <View>

        </View>
    );
};

export const Login = () => {
    return (
        <View>
            <Image style={styles.img} source={require('./assets/survivejpg.jpg')} />
            <View>
                <Text style={styles.titulo1}>Selección de editores</Text>
                <Text style={styles.titulo}>Las Day on Eart:Survival</Text>

            </View>
            <View style={styles.detaills}>
                <Text >Selección de editores</Text>
                <Text >Las Day on Eart:Survival</Text>
                <Text >Selección de editores</Text>
                <Text >Las Day on Eart:Survival</Text>
                

            </View>
            <View style={styles.inputWrapper}>
  <TextInput style={styles.input}>Instalar</TextInput>

<TextInput style={styles.icon}>

  <Icon name="bell-slash"  />
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

    container_categorias: {
        marginVertical: 10,
      },inputWrapper: {
        marginTop: -30,
        marginLeft:200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      input: {
        // flex: 1,
        backgroundColor: '#626161',
        color: '#FFFFFF',width: 100,
marginRight:10,
borderRadius:10,
        textAlign: 'center',
        marginLeft:10,
        // Tus otros estilos aquí...
      },
      
      icon: {
        borderRadius:50,
        height:30,
        width:30,
        textAlign:'center',
        color: 'white',
        backgroundColor: '#626161',
        // position: 'absolute',
        marginRight:40,
      },
      row: {

        flexDirection: 'row',
        alignItems: 'center',
      },
      iconInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      iconsBolt: {
        fontSize: 20,
      },
      btn_ctg: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
      },

      inputDes:{


marginLeft: 500,
marginTop:200,

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
        marginTop: -40,marginLeft: -50,
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
        width: 330, height: 200, marginBottom: 15, marginRight:'auto', marginLeft: 'auto',

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
        width: 330, height: 100, marginTop: -25,marginLeft: 'auto',  // Empujará el componente hacia el margen derecho
        marginRight: 'auto',
    },
    titulo1: {
        
        fontWeight: 'bold',
        backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.54)',
        // backgroundColor: 'linear-gradient(105deg, rgb(0 249 255 / 100%) 39%, rgb(51 56 57 / 100%) 96%)',
        marginTop: -40,

        color:'#000000',
        height: 30,
        width:330,
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
    detaills:{
marginLeft:50,
      marginTop: -70,
    }
});

