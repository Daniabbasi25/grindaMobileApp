import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../assets/theme';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MoreScreen from '../screens/MoreScreen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#377DFF',
        tabBarStyle: {
          height: 73,
        },

        tabBarLabelStyle: {
          bottom: 10,
          fontFamily: 'Inter-Regular',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          //   headerTitleStyle: {
          //     color: Colors.textColor,
          //
          //   },
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Foundation name="home" color={color} size={25} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Stats"
        options={{
          headerShown: false,
          tabBarLabel: 'Stats',
          tabBarIcon: ({color}) => (
            <Feather name="pie-chart" color={color} size={25} />
          ),
        }}
        component={StatsScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="More"
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Foundation name="indent-more" color={color} size={25} />
          ),
        }}
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
