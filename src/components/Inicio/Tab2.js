import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Card, CardItem, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/registro.jpeg';
import img2 from '../../assets/imgs/registro2.jpg';

export default class Tab2 extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>

          <View style={{flexDirection: 'row'}}>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>NOTICIAS</Text>
            </Card>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>AUTOESTIMA E IMAGEN PROFECIONAL</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>EL CEREBRO CARISMATICO</Text>
            </Card>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>NEGOCIACION</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>INTELIGENCIA INTERPERSONAL</Text>
            </Card>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>ULTIMAS NOTICIAS</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card style={{width: '50%', height: 150}}>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>CASOS DE LA VIDA REAL: MOTIVANDONOS</Text>
            </Card>
            <Card style={{width: '50%', height: 150}}>
              <Card style={{backgroundColor: 'gray', position: 'absolute'}}/>
              <Image style={{height: 150, width: '100%', position: 'relative'}} source={img2} />
              <Text style={{position: 'absolute', backgroundColor: 'transparent'}}>AUTOGESTION Y EMPRENDIMIENTO</Text>
            </Card>
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  }
});

module.export = Tab2;
