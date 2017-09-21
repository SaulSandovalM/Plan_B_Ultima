import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
//import FBSDK, {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {Button, Icon, Item, Input, Toast, Spinner, Label, Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/fondo.png';
import img2 from '../../assets/imgs/planb_2.png';
import * as Animatable from 'react-native-animatable';

const {FacebookAuthProvider} = firebase.auth

class Login extends Component {
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: '',
    loading: false,
    loadingF: false,
    login:{correo:'', password:''}
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
    //this.facebook = this.facebook.bind(this);
  }

  // facebook() {
  //   this.setState({loadingF: true});
  //   LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
  //     if (result.isCancelled) {
  //       return Promise.resolve('cancelled');
  //     }
  //     return AccessToken.getCurrentAccessToken();
  //   }).then(data => {
  //     // create a new firebase credential with the token
  //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
  //     // login with credential
  //     return firebase.auth().signInWithCredential(credential);
  //   }).then((currentUser) => {
  //     if (currentUser === 'cancelled') {
  //       console.log('Login cancelled');
  //     } else {
  //       // now signed in
  //       Actions.Log();
  //       Toast.show({text: 'Bienvenido', position: 'bottom', duration: 3000, type: 'success'})
  //     }
  //   }).catch((error) => {
  //     console.log(`Login fail with error: ${error}`);
  //   })
  // }

  onButtonPress() {
    const {correo, password} = this.state.login;
    this.setState({error: '', loading: true});
    firebaseAuth.signInWithEmailAndPassword(correo, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginFailed);
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({text: 'Usuario/contraseña inválidos', position: 'bottom', buttonText: 'OK', type: 'danger'})
  }

  onLoginSuccess(r) {
    console.log(r);
    this.setState({email: '', contraseña: '', error: '', loading: false});
    Actions.Log();
    Toast.show({text: 'Bienvenido', position: 'bottom', duration: 5000, type: 'success'})
  }

  spinnerInicio() {
    if (this.state.loading) {
      return (
        <Button rounded block style={styles.buttonSpinner}>
          <Spinner color='white'/>
        </Button>
      );
    }

    return (
      <Button
        rounded
        block
        style={styles.buttonIngreso}
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.boton}>INGRESAR</Text>
      </Button>
    );
  }

  // spinnerInicioF() {
  //   if (this.state.loadingF) {
  //     return (
  //       <Button rounded block style={styles.buttonSpinnerF}>
  //         <Spinner color='white'/>
  //       </Button>
  //     );
  //   }
  //
  //   return (
  //     <Button rounded block light style={styles.buttonIngresoF} onPress={this.facebook.bind(this)}>
  //       <Text style={styles.boton}>
  //         o Iniciar con Facebook</Text>
  //     </Button>
  //   );
  // }

  handleChange = (field, value) => {
    const login = this.state.login;
    login[field] = value;
    this.setState({login});
  };

  render() {
    return (
      <Image source={img} style={styles.img}>

          <View style={styles.view1}>
          <Item rounded style={styles.inputRounded}>
            <Input
              name="correo"
              style={styles.input}
              placeholder='Correo electrónico'
              keyboardType='email-address'
              placeholderTextColor='#ccc'
              returnKeyType='next'
              value={this.state.correo}
              autoCapitalize='none'
              onChangeText={value=>this.handleChange("correo", value)}/>
          </Item>

          <Item rounded style={styles.inputRounded}>
            <Input
              name="password"
              style={styles.input}
              placeholder='Contraseña'
              placeholderTextColor='#ccc'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={value=>this.handleChange("password", value)}/>
          </Item>
          </View>

          {this.spinnerInicio()}
          {/*{this.spinnerInicioF()}*/}

          <View style={styles.view2}>
            <View style={styles.view3}>
              <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
                onPress={() => Actions.Registro()}>
                <Text style={styles.text1}>Crear Cuenta</Text>
              </Animatable.Text>
              <TouchableOpacity onPress={() => Actions.Recover()}>
                <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    justifyContent: 'flex-end',
    flex: 2,
    height: null,
    width: null,
    opacity: 15
  },
  texto: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  view: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  view1: {
    marginTop: 15
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1.5,
    backgroundColor: 'white'
  },
  input: {
    color: 'black'
  },
  buttonIngreso: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  buttonIngresoF: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#3b5998'
  },
  buttonSpinnerF: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#3b5998'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  view2: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  view3: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10
  },
  font: {
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  text1: {
    color: 'white',
    fontSize: 18
  },
  imagen: {
    alignSelf: 'center',
    width: 300,
    height: 127,
    marginBottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white'
  }
});

export default Login;
