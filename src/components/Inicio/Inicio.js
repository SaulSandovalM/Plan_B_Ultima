import React, {Component} from 'react';
import {Container, Tab, Tabs, StyleProvider} from 'native-base';
import CabeceraInicio from '../Cabecera/CabeceraInicio';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default class Inicio extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <CabeceraInicio hasTabs/>
          <Tabs>
            <Tab heading="YO" >
              <Tab1/>
            </Tab>
            <Tab heading="NOTICIAS" >
              <Tab2/>
            </Tab>
          </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}
