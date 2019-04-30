import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';
//import BattleStack from '../navigation/MainTabNavigator'
import { WebBrowser } from 'expo';

export default class DungeonScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        alert('Button pressed');

    }


    
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
            <TouchableOpacity style={styles.storeIcon} activeOpacity = { .5 }
             onPress={() => this.props.navigation.navigate('Battle') }>

                <Image source={require('../assets/images/recruit-heros-1.png')}>
                </Image>
                <Text style={styles.storeText}>Recruit new heros</Text>

            </TouchableOpacity>

                <Text>Placeholder</Text>
                <Text>Placeholder</Text>
                <Text>Placeholder</Text>
                <Button title="Press Me" onPress={this.handlePress} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    storeIcon: {
        margin: 10
    },
    storeText:{
        color: 'white',
        fontWeight: 'bold',
    },

    contentContainer: {
        marginTop: 30
	}
});
