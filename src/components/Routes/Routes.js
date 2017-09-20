import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from '../Bienvenida/Bienvenida';
import Terminos from '../Terminos/Terminos';
import Term from '../Terminos/TermyCond';
import Aviso from '../Terminos/Avisos';
import Login from '../Login/Login';
import Log from '../Login/Log';
import Inicio from '../Inicio/Inicio';
import Registro from '../Login/Registro';
import Recover from '../Login/Recover';
// import Ingresos from '../Ingreso/Ingresos';
// import Gastos from '../Gasto/Gastos';
// import Ahorros from '../Ahorro/Ahorros';
// import Perfil from '../Perfil/Perfil';
// import NuevoAhorro from '../Ahorro/NuevoAhorro';
// import Tips from '../Tips/Tips';
// import IngresosIntro from '../FinanzasEmpezar/IngresosIntro';
// import GastosIntro from '../FinanzasEmpezar/GastosIntro';
// import EditarAhorro from '../Ahorro/EditarAhorro';
// import Depositar from '../Ahorro/Depositar';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Bienvenida" header={null} component={Bienvenida}/>
        <Scene key="Terminos" header={null} component={Terminos} initial/>
        <Scene key="Term" header={null} component={Term}/>
        <Scene key="Aviso" header={null} component={Aviso} />
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Log" header={null} component={Log} />
        <Scene key="Inicio" header={null} component={Inicio} />
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Recover" header={null} component={Recover}/>
      {/*
        <Scene key="IngresosIntro" header={null} component={IngresosIntro}/>
        <Scene key="GastosIntro" header={null} component={GastosIntro}/>
        <Scene key="Ingresos" header={null} component={Ingresos}/>
        <Scene key="Gastos" header={null} component={Gastos}/>
        <Scene key="Ahorros" header={null} component={Ahorros}/>
        <Scene key="NuevoAhorro" header={null} component={NuevoAhorro}/>
        <Scene key="Tips" header={null} component={Tips}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
        <Scene key="EditarAhorro" header={null} component={EditarAhorro}/>
        <Scene key="Depositar" header={null} component={Depositar}/>*/}
      </Scene>
    </Router>
    </Root>
  );
}
export default Routes;
