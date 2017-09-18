import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import FBSDK, {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {Button, Icon, Item, Input, Toast, Spinner, Label} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/fondo.jpg';
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
    loadingF: false
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
    this.facebook = this.facebook.bind(this);
  }

  facebook() {
    this.setState({loadingF: true});
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
      if (result.isCancelled) {
        return Promise.resolve('cancelled');
      }
      return AccessToken.getCurrentAccessToken();
    }).then(data => {
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // login with credential
      return firebase.auth().signInWithCredential(credential);
    }).then((currentUser) => {
      if (currentUser === 'cancelled') {
        console.log('Login cancelled');
      } else {
        // now signed in
        Actions.Log();
        Toast.show({text: 'Bienvenido', position: 'bottom', duration: 3000, type: 'success'})
      }
    }).catch((error) => {
      console.log(`Login fail with error: ${error}`);
    })
  }

  onButtonPress() {
    const {email, contraseña} = this.state;
    this.setState({error: '', loading: true});
    firebaseAuth.signInWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess).catch(this.onLoginFailed);
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({text: 'Usuario/contraseña inválidos', position: 'bottom', buttonText: 'OK', type: 'danger'})
  }

  onLoginSuccess() {
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
      <Button rounded block style={styles.buttonIngreso} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.boton}>INGRESAR</Text>
      </Button>
    );
  }

  spinnerInicioF() {
    if (this.state.loadingF) {
      return (
        <Button rounded block style={styles.buttonSpinnerF}>
          <Spinner color='white'/>
        </Button>
      );
    }

    return (
      <Button rounded block light style={styles.buttonIngresoF} onPress={this.facebook.bind(this)}>
        <Text style={styles.boton}> o Iniciar con Facebook</Text>
      </Button>
    );
  }

  render() {
    return (
      <Image source={img} style={styles.img}>
        <Image source={img2} style={styles.imagen}/>

          <TextInput keyboardType='email-address' style={styles.input} placeholder='Correo electrónico'
            placeholderTextColor='#000' returnKeyType='next' value={this.state.text}
            onChangeText={email => this.setState({email})}/>

          <TextInput style={styles.input} placeholder='Contraseña' placeholderTextColor='#000' secureTextEntry={true}
            value={this.state.contraseña} onChangeText={contraseña => this.setState({contraseña})}/>

        {this.spinnerInicio()}

        {this.spinnerInicioF()}

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
    justifyContent: 'space-around',
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
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1.5,
    backgroundColor: 'white'
  },
  input: {
    color: 'black',
    marginRight: 40,
    marginLeft: 40
  },
  buttonIngreso: {
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
    backgroundColor: '#3b5998',
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
    marginBottom: 10,
    marginTop: 10
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
    top: 50
  },
  icon: {
    color: 'white'
  }
});

export default Login;
