import React, {Component} from 'react';
import {StyleSheet, View, BackHandler, Image,Touchablehighlight} from 'react-native';
import {Button, Body, List, ListItem, Container, Content, Text, Right, Left, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/plan.png';

class Terminos extends Component {
  render() {
    return (
        <Container style={styles.back}>
          <Content>
            <View style={styles.view1}>
              <Image source={img} style={styles.imagen}/>
            </View>

            <View style={styles.view2}>
              <Text style={styles.font}>términos y condiciones</Text>
            </View>

            <List style={styles.list}>
            <ListItem>
            <Text>Lea atentamente. Al pulsar el botón de aceptar, usted reconoce
                  que ha leído y que acepta los siguientes términos:</Text>
            </ListItem>

            <ListItem onPress={() => Actions.Term()} >
              <Body style={styles.view3}>
                <Text>Derechos de Propiedad.</Text>
                <Text note>Entre usted y el Centro de innovación
                tecnológica financiera... Leer mas</Text>
              </Body>

            </ListItem>

            <ListItem onPress={() => Actions.Term()}>
              <Body style={styles.view3}>
                <Text>Licencia Limitada.</Text>
                  <Text note>Usted puede acceder y ver el contenido del Sitio
                  Web y/o Aplicación Móvil... Leer mas</Text>
              </Body>

            </ListItem>
          </List>
          <View style={styles.view2}>
            <Text style={styles.font}>Aviso de privacidad</Text>
          </View>

          <List style={styles.list}>

          <ListItem  onPress={() => Actions.Aviso()} >
            <Body style={styles.view3}>
              <Text>Plan B</Text>
              <Text note>Es el responsable del uso y protección de sus datos personales, y al respecto le informamos
              lo siguiente...>Leer mas</Text>
            </Body>

          </ListItem>
          </List>


          </Content>
          <Button rounded block onPress={() => Actions.Login()} style={styles.boton}>
            <Text style={styles.text}>Aceptar</Text>
          </Button>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  font: {
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: '#4DA49B',
    top: 6,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  view1: {
    alignSelf: 'center'
  },
  view3: {
    flexDirection:'column'
  },
  imagen: {
    marginTop: 30
  },
  view2: {
    alignSelf: 'center',
    marginTop: 10
  },
  list: {
    margin: 25
  }
});

export default Terminos;
