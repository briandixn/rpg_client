import React from 'react';
 import { ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Battlesprite } from '../components/battleSprite';


export default class Battlescreen extends React.Component {


////battlesprite is not working at this time. will solve later for now we can use
///pikachu.gif and sword as placeholder


  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.enemyIcon} activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/pikachu.gif')}>
        </Image>
        <Text style={styles.storeText}>weapons shop</Text>

        </TouchableOpacity>

      </ScrollView>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  storeText:{
    color: 'white',
    fontWeight: 'bold',
},
enemyIcon:{
  alignItems: 'center',
  justifyContent: 'center'
}
});
