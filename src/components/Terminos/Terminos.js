import React, {Component} from 'react';
import {StyleSheet, View, BackHandler, Image} from 'react-native';
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
            <ListItem icon>
              <Left>
                <Icon name="eye" />
              </Left>
              <Body>
                <Text>Derechos de Propiedad.</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="alert" />
              </Left>
              <Body>
                <Text>Licencia Limitada.</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="lock" />
              </Left>
              <Body>
                <Text>Uso Prohibido.</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="bookmark" />
              </Left>
              <Body>
                <Text>Marcas Comerciales.</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>Información del Usuario.</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="key" />
              </Left>
              <Body>
                <Text>Sitios Web de Terceros.</Text>
              </Body>
            </ListItem>
          </List>

            <Button rounded block onPress={() => Actions.Login()} style={styles.boton}>
              <Text style={styles.text}>Acepto</Text>
            </Button>

          </Content>
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
