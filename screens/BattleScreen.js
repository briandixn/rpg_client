import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Battlesprite } from '../components/battleSprite';


export default class Battlescreen extends React.Component {


////battlesprite is not working at this time. will solve later for now we can use
///pikachu.gif and sword as placeholder


  render() {
    return (
      <ScrollView style={styles.container}>


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
});
