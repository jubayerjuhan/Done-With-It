import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import AppLoading from 'expo-app-loading';

import AppNavigator from "./app/Navigations/AppNavigator.js";
import MyTheme from './app/Navigations/navigationTheme.js';
import Nointernet from "./app/components/Nointernet.js";
import AuthNavigator from "./app/Navigations/AuthNavigator.js";
import AuthContext from "./app/context/authContext.js";
import storage from "./app/utility/storage.js";

export default function App() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState('')
  const { isInternetReachable } = useNetInfo()

  const loadUser = async () => {
    const user = await storage.getUser()

    if (!user) return
    setUser(user)
  }

  if (!ready) {
    return <AppLoading startAsync={loadUser} onFinish={() => setReady(true)} onError={() => console.log('error app loading comp')} />
  }

  return (
    <>
      {!isInternetReachable && <Nointernet />}
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={MyTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}


