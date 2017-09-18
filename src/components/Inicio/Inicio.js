import React, {Component} from 'react';
import {Container, Tab, Tabs, StyleProvider} from 'native-base';
import CabeceraInicio from '../Cabecera/CabeceraInicio';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab6 from './Tab6';
import Tab7 from './Tab7';
import Tab8 from './Tab8';

export default class Inicio extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <CabeceraInicio hasTabs/>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Tab1">
              <Tab1 />
            </Tab>
            <Tab heading="Tab2">
              <Tab2 />
            </Tab>
            <Tab heading="Tab3">
              <Tab3 />
            </Tab>
            <Tab heading="Tab4">
              <Tab4 />
            </Tab>
            <Tab heading="Tab5">
              <Tab5 />
            </Tab>
            <Tab heading="Tab6">
              <Tab6 />
            </Tab>
            <Tab heading="Tab7">
              <Tab7 />
            </Tab>
            <Tab heading="Tab8">
              <Tab8 />
            </Tab>
          </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}
