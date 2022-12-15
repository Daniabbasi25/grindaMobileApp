import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTab from './BottomTab';
import CategoryScreen from '../screens/CategoryScreen';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import CreateCollectionScreen from '../screens/CreateCollectionScreen';
import Details from '../screens/DetailsScreen';
const MainStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateCollectionScreen"
        component={CreateCollectionScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Create Collection',
        }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={require('../../assets/Images/collection.png')}
              style={{marginLeft: 5}}
            />
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <TouchableOpacity>
                <Icon name="heart" size={30} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="search" size={30} color="#000" />
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
