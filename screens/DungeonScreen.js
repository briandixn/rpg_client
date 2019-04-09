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

    contentContainer: {
        marginTop: 30
	}
});
