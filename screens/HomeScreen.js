import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import SpriteSheet from 'rn-sprite-sheet';
import { Battlesprite } from '../components/battleSprite';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
        <ImageBackground source={require('../assets/images/test_background.png')} 
        style={{width: '100%', height: '100%'}}>

         <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
          <View style={styles.mapSection}>


          <TouchableOpacity style={styles.storeIcon} activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/weapons-shop-1.png')}>
        </Image>
        <Text style={styles.storeText}>weapons shop</Text>

        </TouchableOpacity>


          <TouchableOpacity style={styles.storeIcon} activeOpacity = { .5 } onPress={ this.callFun }>

          <Image source={require('../assets/images/recruit-heros-1.png')}>
          </Image>
          <Text style={styles.storeText}>Recruit new heros</Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.storeIcon} activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/Items-shop-1.png')}>
        </Image>
        <Text style={styles.storeText}>items shop</Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.storeIcon} activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/organize-heros-1.png')}>
        </Image>
        <Text style={styles.storeText}>organize heros</Text>

        </TouchableOpacity>


          </View>

        </ScrollView>
        
      </View>
      </ImageBackground>
    );
  }
}
//this.callFun does nothing. its just copied code from a site


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',

    },
    mapSection: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    storeIcon: {
        margin: 10
    },
    storeText:{
        color: 'white',
        fontWeight: 'bold',
    },

    storeSection: {
        width: 130,
        height: 100,
        margin: 23,
        borderRadius: 5,
        fontSize: 20,
    },
    
    contentContainer: {
        paddingTop: 30
    },
    
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50
    },
    homeScreenFilename: {
        marginVertical: 7
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)'
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4
    },
    
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            }
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center'
    },
    navigationFilename: {
        marginTop: 5
    },
    
});
