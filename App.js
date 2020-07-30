// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';



import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#8956ff',
      },
      headerTintColor: '#ffffff',

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'HomeScreen',
        headerLeft: () => (
          <Icon.Button backgroundColor="#8956ff" onPress={() => navigation.openDrawer()}>
            <Icon name="bars"  size={20} backgroundColor="#8956ff" color="#fff"  />

            </Icon.Button>

        ),
      }}
    />
  </HomeStack.Navigator>
);
const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#8956ff',
      },
      headerTintColor: '#ffffff',

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{title: 'Details',
      headerLeft: () => (
        <Icon.Button backgroundColor="#8956ff" onPress={() => navigation.openDrawer()}>
          <Icon name="bars"  size={20} backgroundColor="#8956ff" color="#fff"  />

          </Icon.Button>

      ),
    }}
  
    />
  </DetailsStack.Navigator>
);

function App() {
  return (
    <NavigationContainer screenOpections={{}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
