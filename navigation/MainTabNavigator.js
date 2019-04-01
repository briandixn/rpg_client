import React from 'react';
import { Platform } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DungeonScreen from '../screens/DungeonScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    )
};

const DungeonStack = createStackNavigator({
    Dungeons: DungeonScreen
});

DungeonStack.navigationOptions = {
	tabBarLabel: 'Dungeons',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused}/>
	)
}

export default createBottomTabNavigator({
	HomeStack,
	DungeonStack
});
