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

          <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/weapons-shop-1.png')}>
        </Image>
        <Text>weapons shop</Text>

        </TouchableOpacity>

          <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>

          <Image source={require('../assets/images/recruit-heros-1.png')}>
          </Image>
          <Text>Recruit new heros</Text>

        </TouchableOpacity>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/Items-shop-1.png')}>
        </Image>
        <Text>items shop</Text>

        </TouchableOpacity>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>

        <Image source={require('../assets/images/organize-heros-1.png')}>
        </Image>
        <Text>organize heros</Text>

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
        margin: 3
    },
    imagebutton:{
      borderRadius: 3,
    },

    storeSection: {
        width: 130,
        height: 100,
        backgroundColor: '#13632B',
        margin: 23,
        borderRadius: 5,
        color: '#AED66E',
        fontSize: 20,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center'
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
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
    helpContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    helpLink: {
        paddingVertical: 15
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7'
    }
});
