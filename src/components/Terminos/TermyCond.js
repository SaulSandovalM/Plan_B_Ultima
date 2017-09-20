import React, {Component} from 'react';
import {StyleSheet, View, BackHandler, Image} from 'react-native';
import {Button, Body, List, ListItem, Container, Content, Text, Right, Left, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/plan.png';

class ModTerminos extends Component {
  render() {
    return (
        <Container style={styles.back}>
          <Content>
            <View style={styles.view1}>
              <Image source={img} style={styles.imagen}/>
            </View>

            <View style={styles.view2}>
              <Text style={styles.font}>Términos y condiciones</Text>
            </View>
            <View>
            <List style={styles.list}>
            <ListItem>
              <Text style={styles.texto}>Los siguientes términos y condiciones rigen el uso que usted le dé a los
              medios digitales y a cualquiera de los contenidos disponibles por o a través
              de este sitio web y/o aplicación móvil, incluyendo cualquier contenido
              derivado del mismo . Centro de innovación tecnológica financiera y de
              negociación. ("Centro de innovación tecnológica financiera y de
              negociación." o "nosotros") ha puesto a su disposición el Sitio Web y la
              aplicación móvil. Podemos cambiar los Términos y Condiciones, en
              cualquier momento sin ninguna notificación, sólo publicando los cambios
              en el Sitio Web. AL USAR EL SITIO WEB Y/O APLICACIÓN MÓVIL,
              USTED ACEPTA Y ESTÉ DE ACUERDO CON ESTOS TÉRMINOS Y
              CONDICIONES EN LO QUE SE REFIERE A SU USO DE LOS MEDIOS
              DIGITALES. Si usted no está de acuerdo con estos Términos y
              Condiciones, no puede tener acceso al mismo ni usar el Sitio Web de
              ninguna otra manera.</Text>
            </ListItem>
            <ListItem style={styles.view3}>

              <Text style={styles.font}>Derechos de Propiedad</Text>

              <Text>Entre usted y el Centro de innovación
              tecnológica financiera y de negociación., Centro de innovación tecnológica
              financiera y de negociación. es dueño único y exclusivo, de todos los
              derechos, título e intereses en y del Sitio Web y/o Aplicación móvil, de todo
              el contenido (incluyendo, por ejemplo, audio, fotografías, ilustraciones,
              gráficos, otros medios visuales, videos, copias, textos, software, títulos,
              archivos de Onda de choque, etc.), códigos, datos y materiales del mismo,
              el aspecto y el ambiente, el diseño y la organización del Sitio Web y la
              compilación de los contenidos, códigos, datos y los materiales en el Sitio
              Web, incluyendo pero no limitado a, cualesquiera derechos de autor,
              derechos de marca, derechos de patente, derechos de base de datos,
              derechos morales y otras propiedades intelectuales y derechos
              patrimoniales del mismo. Su uso del Sitio Web y/o Aplicación Móvil no le
              otorga propiedad de ninguno de los contenidos, códigos, datos o
              materiales a los que pueda acceder en o a través del Sitio Web y/o
              Aplicación Móvil.</Text>
              </ListItem>
              <ListItem style={styles.view3}>

              <Text style={styles.font}>Licencia Limitada</Text>

              <Text> Usted puede acceder y ver el contenido del Sitio
              Web y/o Aplicación Móvil desde su computadora o desde cualquier otro
              aparato y, a menos de que se indique de otra manera en estos Términos
              y Condiciones o en el Sitio Web, queda prohibido sacar copias o
              impresiones individuales del contenido del Sitio Web y/o aplicación móvil
              para su uso personal, El material publicado en los medios digitales es para
              consulta interna únicamente. El uso del Sitio Web y/o aplicación móvil y de
              los servicios que se ofrecen en los medios digitales, son sólo para consulta
              y lectura personal, no comercial.</Text>
              </ListItem>
              <ListItem style={styles.view3}>

              <Text style={styles.font}>Uso Prohibido</Text>

              <Text>Cualquier distribución, publicación o explotación
              comercial o promocional del Sitio Web y/o Aplicación Móvil, o de cualquiera
              de los contenidos, códigos, datos o materiales, está estrictamente
              prohibida, a menos de que usted haya recibido el previo permiso expreso
              por escrito del personal autorizado de Centro de innovación tecnológica
              financiera y de negociación. o de algún otro poseedor de derechos
              aplicable. A no ser como está expresamente permitido en el presente
              contrato, usted no puede descargar, informar, exponer, publicar, copiar,
              reproducir, distribuir, transmitir, modificar, ejecutar, difundir, transferir,
              crear trabajos derivados de, vender o de cualquier otra manera explotar
              cualquiera de los contenidos, códigos, datos o materiales en o disponibles
              a través del Sitio Web y/o Aplicación Móvil. Usted se obliga además a no
              alterar, editar, borrar, quitar, o de otra manera cambiar el significado o la
              apariencia de, o cambiar el propósito de, cualquiera de los contenidos,
              códigos, datos o materiales en o disponibles a través del Sitio Web y/o
              Aplicación Móvil, incluyendo, sin limitación, la alteración o retiro de
              cualquier marca comercial, marca registrada, logo, marca de servicios o
              cualquier otro contenido de propiedad o notificación de derechos de
              propiedad. Usted reconoce que no adquiere ningún derecho de propiedad
              al descargar algún material con derechos de autor de o a través del Sitio
              Web y/o Aplicación Móvil. Si usted hace otro uso del Sitio Web y/o
              Aplicación Móvil, o de los contenidos, códigos, datos o materiales que ahí
              se encuentren o que estén disponibles, a no ser como se ha estipulado
              anteriormente, usted puede violar las leyes de derechos de autor y otras
              leyes de los Estados Unidos Mexicanos y de otros países, así como las
              leyes estatales aplicables, y puede ser sujeto a responsabilidad legal por
              dicho uso no autorizado.</Text>
              </ListItem>
              <ListItem style={styles.view3}>

              <Text style={styles.font}>Marcas Comerciales.</Text>

              <Text>Las marcas comerciales, logos, marcas de
              servicios, marcas registradas (conjuntamente las "Marcas Comerciales")
              expuestas en el Sitio Web y/o Aplicación Móvil o en los contenidos
              disponibles, son Marcas Comerciales del Centro de innovación tecnológica
              financiera y de negociación. registradas y no registradas y otras, y no
              pueden ser usadas con respecto a productos y/o servicios que no estén
              relacionados, asociados o patrocinados por sus poseedores de derechos
              y que puedan causar confusión a los clientes, o de alguna manera que
              denigre o desacredite a sus poseedores de derechos. Todas las Marcas
              Comerciales que no sean del Centro de innovación tecnológica financiera
              y de negociación. que aparezcan en el sitio Web y/o Aplicación Móvil o a
              través de los servicios, si las hubiera, son propiedad de sus respectivos
              dueños. Nada que esté contenido en el Sitio Web deberá ser interpretado
              como otorgando, por implicación, desestimación, o de otra manera, alguna
              licencia o derecho para usar alguna Marca Comercial expuesta en el Sitio
              Web sin el permiso escrito del Centro de innovación tecnológica financiera
              y de negociación. o de terceros que puedan ser dueños de dicha Marca
              Comercial. El mal uso de las Marcas Comerciales expuestas en el Sitio
              Web y/o Aplicación Móvil o a través de cualquiera de los servicios está
              estrictamente prohibido.</Text>
              </ListItem>
              <ListItem style={styles.view3}>

              <Text style={styles.font}>Información del Usuario.</Text>

              <Text>En el curso del uso que usted haga del
              Sitio Web y/o Aplicación Móvil de los servicios puestos a su disposición
              en o a través de los medios digitales, se le puede pedir que nos
              proporcione cierta información personalizada (dicha información en lo
              sucesivo "Información del Usuario"). Las políticas de uso y recopilación de
              información del Centro de innovación tecnológica financiera y de
              negociación. con respecto a la privacidad de dicha Información del Usuario
              se establecen en la los avisos de Privacidad del Sitio Web, la cual está
              incorporada al mismo como referencia para todos los propósitos. Usted
              reconoce y acepta ser el único responsable de la exactitud del contenido
              de la Información del Usuario.</Text>
              </ListItem>
              <ListItem style={styles.view3}>

              <Text style={styles.font}>Sitios Web de Terceros</Text>

              <Text>Usted puede enlazar (link) del Sitio Web a
              sitios web de terceros y terceros pueden enlazarse al Sitio Web ("Sitios
              Enlazados"). Usted reconoce y está de acuerdo en que nosotros no
              tenemos responsabilidad sobre la información, contenido, productos,
              servicios, anuncios, códigos u otros materiales que puedan o no puedan
              ser proporcionados por o a través de los medios digitales Enlazados, aún
              si son propiedad de o son dirigidos por afiliados nuestros. Los enlaces
              (links) a Sitios Enlazados no constituyen un aval o patrocinio nuestro de
              dichos sitios web o de la información, contenido, productos, servicios,
              anuncios, códigos u otros materiales presentados en o a través de dichos
              sitios web. La inclusión de cualquier enlace a dichos sitios en nuestro Sitio
              y/o aplicación móvil no implica el aval, patrocinio o recomendación de ese
              sitio del Centro de innovación tecnológica financiera y de negociación.
              Centro de innovación tecnológica financiera y de negociación rechaza
              cualquier responsabilidad por los enlaces (1) de otro sitio web a este Sitio
              Web y/o Aplicación Móvil y (2) a otro sitio web de este Sitio Web. Centro
              de innovación tecnológica financiera y de negociación no puede garantizar
              los estándares de cualquier sitio web al cual se le proporcionen enlaces en
              este Sitio Web y/o Aplicación Móvil, ni será el Centro de innovación
              tecnológica financiera y de negociación responsable de los contenidos de
              dichos sitios, o de cualquier enlace subsecuente. Centro de innovación
              tecnológica financiera y de negociación no representa o garantiza que los
              contenidos del sitio web de algún tercero sean exactos, que cumplan con
              la ley estatal o federal, o que cumplan con las leyes de derechos de autor
              o con otras leyes de propiedad intelectual. Centro de innovación
              tecnológica financiera y de negociación tampoco es responsable de
              cualquier forma de transmisión recibida de cualquier sitio web enlazado.
              Cualquier confianza depositada en los contenidos de un sitio web de
              terceros es hecha por su propio riesgo y usted asume todas las
              responsabilidades y consecuencias que resulten de dicha confianza.</Text>
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
    fontWeight: 'bold',
    marginBottom: 10
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
  },
  texto:{
    textAlign: 'justify'
  }
});

export default ModTerminos;
