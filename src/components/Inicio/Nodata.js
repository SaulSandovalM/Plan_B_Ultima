import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'native-base';
//import IngresosIntro from '../FinanzasEmpezar/IngresosIntro';

export default class Nodata extends Component {
  render() {
    return (
      <Card>
        <View style={styles.container}>
          <Text style={styles.chart_title}>Aun no has agregado ningun dato de finanzas agrega uno</Text>
          {/*<IngresosIntro/>*/}
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  chart_title: {
    paddingTop: 5,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 22,
    backgroundColor: 'white',
    color: 'grey',
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
