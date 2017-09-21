import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import {Button, Icon, Toast, Label, Content, Container, Header, Thumbnail, H1} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/fondo.png';
import img2 from '../../assets/imgs/planb_2.png';
import * as Animatable from 'react-native-animatable';

class Perfil extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <Thumbnail source={img2} style={{margin: 10}}/>
          <H1 style={{marginLeft: 20}}>Saul Sandoval M</H1>
          <Text style={{marginLeft: 20}}>@Saul Sandoval M</Text>
        </Content>
      </Container>
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
});

export default Perfil;
