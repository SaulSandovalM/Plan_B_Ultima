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
              <Text style={styles.font}>AVISO DE PRIVACIDAD</Text>
            </View>

            <View>
            <List style={styles.list}>
            <ListItem>
              <Text>Centro de innovación tecnológica financiera y de negociación, mejor conocido como Plan B, con domicilio en calle
              Exhacienda de la Concepción 3,, colonia San Juan Tilcuautla, ciudad Pachuca de Soto, municipio o delegación
              Municipio de San Agustín Tlaxiaca, c.p. 42162, en la entidad de Hidalgo, país Mexico, y portal de internet
              contacto@planb.com.mx, es el responsable del uso y protección de sus datos personales, y al respecto le informamos
              lo siguiente:.</Text>
              </ListItem>


              <Text style={styles.font} >¿Para qué fines utilizaremos sus datos personales?</Text>
            <ListItem style={styles.view3}>
              <Text>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias
              para el servicio que solicita:</Text>
              <Text>● Datos de identificación</Text>
              <Text>● Datos de contacto</Text>
              <Text>● Datos laborales</Text>
              <Text>● Datos académicos</Text>
              <Text>● Datos patrimoniales y/o financieros</Text>
              </ListItem>

              <Text style={styles.font}>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</Text>
              <ListItem style={styles.view3}>
              <Text> Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del
              uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de
              que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases
              de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse
              al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos
              ARCO.</Text>
              <Text>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del
              siguiente medio:</Text>
              <Text> Correo electronico institucional</Text>
              <Text> Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las
              solicitudes de derechos ARCO, son los siguientes:</Text>
              <Text> a) Nombre de la persona o departamento de datos personales: Carlos Mendoza</Text>
              <Text> b) Domicilio: calle Boulevard Ex Hacienda de la Concepción 3, colonia San Juan Tilcuautla, ciudad Pachuca Hidalgo,
                      municipio o delegación San Agustin Tlaxiaca, c.p. 42162, en la entidad de Hidalgo, país Mexico</Text>
              <Text> c) Correo electrónico: contacto@planb.com.mx</Text>
              </ListItem>

              <Text style={styles.font}>Usted puede revocar su consentimiento para el uso de sus datos personales</Text>
                <ListItem style={styles.view3}>
              <Text>Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos
              personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su
              solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir
              tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su
              consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su
              relación con nosotros</Text>

              <Text>Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:</Text>
              <Text>contacto@planb.com.mx</Text>
              <Text>Para conocer el procedimiento y requisitos para la revocación del consentimiento, ponemos a su disposición el
              siguiente medio: Correo Electronico</Text>
              </ListItem>

              <Text style={styles.font}>¿Cómo puede limitar el uso o divulgación de su información personal?</Text>
                <ListItem style={styles.view3}>
              <Text>Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes
              medios: Correo Electronico</Text>
              </ListItem>

              <Text style={styles.font}>El uso de tecnologías de rastreo en nuestro portal de internet</Text>
                <ListItem style={styles.view3}>
              <Text>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de
              las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y
              experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los
              utilizaremos para los siguientes fines: Analisis</Text>
              <Text>Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</Text>
              <Text>Identificadores, nombre de usuario y contraseñas de una sesión
              Idioma preferido por el usuario
              Publicidad revisada por un usuario
              Listas y hábitos de consumo en páginas de compras</Text>
              </ListItem>

              <Text style={styles.font}>¿Cómo puede conocer los cambios en este aviso de privacidad?</Text>
              <ListItem style={styles.view3}>
              <Text>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos
              requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras
              prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
              Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a
              través de: Publicación Oficial en el sitio Web.
              El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente
              aviso de privacidad es el siguiente:
              publicación</Text>
              </ListItem>
              </List>
            </View>



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
    marginBottom: 10,
    marginTop: 10,
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
