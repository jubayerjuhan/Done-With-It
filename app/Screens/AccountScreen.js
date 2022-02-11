import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


import HorizontalListitem from '../components/HorizontalListitem.js';
import Icon from '../components/Icon.js';
import Screen from '../components/Screen.js';
import ScreenHeading from '../components/ScreenHeading.js';
import Colors from '../config/Colors.js';
import Separator from '../components/Separator.js';
import storage from '../utility/storage.js';
import useAuth from '../Hooks/useAuth.js';

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth()
  const AccountScreenData = [
    {
      title: "My Listings", icon: {
        name: "format-list-bulleted",
        backgroundColor: Colors.primary
      },
      targetScreen: "MyListings"
    },
    {
      title: "My Messages", icon: {
        name: "email",
        backgroundColor: Colors.secondary,
      },
      targetScreen: "Messages"
    },
  ]


  console.log(user)

  return (
    <Screen style={styles.Screen}>
      <ScreenHeading>Account</ScreenHeading>
      <HorizontalListitem
        image='https://www.w3schools.com/howto/img_avatar.png'
        title={user.name}
        subtitle={user.email}
      />

      <View style={styles.container}>
        <FlatList
          data={AccountScreenData}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <HorizontalListitem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              iconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}

            />
          )}
        />
      </View>
      <HorizontalListitem
        onPress={logOut}
        title={'Log Out'}
        iconComponent={<Icon name='logout' backgroundColor='#ffe66d'></Icon>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: Colors.lightgray,
  },
  container: {
    marginVertical: 20,
  }

})


export default AccountScreen;