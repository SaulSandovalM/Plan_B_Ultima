import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {firebaseAuth} from '../Firebase/Firebase';
import {Actions} from 'react-native-router-flux';
import Inicio from '../Inicio/Inicio';
import Bienvenida from '../Bienvenida/Bienvenida';

class Log extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Inicio/>;
      case false:
        return <Bienvenida/>;
    }
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  view: {
    flex: 1
  }
});

export default Log;
