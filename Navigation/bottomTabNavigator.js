import React from 'React';
import CreatePost from '../Screens/CreatePost';
import Feed from '../Screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'grey' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') { iconName = focused ? 'book' : 'book-outline'; }
                    else if (route.name === 'CreatePost') { iconName = focused ? 'create' : 'create-outline'; }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name='CreatePost' component={CreatePost} />
            <Tab.Screen name='Feed' component={Feed} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator