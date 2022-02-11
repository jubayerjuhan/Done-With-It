import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

import ListingEditScreen from "../Screens/ListingEditScreen.js";
import FeedNavigators from "./FeedNavigators.js";
import AccountNavigator from "./AccountNavigator.js";
import NavRoundButton from "./NavRoundButton.js";
import expoPushNoti from "../api/expoPushNoti.js";

function AppNavigator(props) {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    registerForPushNotification();
  }, [])

  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync({
        ios: {
          alert: true,
          badge: true,
          sound: true,
        },
        android: {
          alert: true,
          badge: true,
          sound: true,
        },
      });
      console.log(permission, 'permission appNavigator');
      if (permission.granted) {
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        expoPushNoti.register(token);
      }
    } catch (error) {
      console.log(error, 'Appnavigator , registerForPushNotification')
    }
  }
  return (
    <Tab.Navigator
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }}

        name="Feed"
        component={FeedNavigators}

      />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NavRoundButton onPress={() => navigation.navigate('ListingEdit')} />,
          headerShown: false,
        })}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
        name="AccountNavigator" component={AccountNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;