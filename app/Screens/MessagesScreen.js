import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import HorizontalListitem from '../components/HorizontalListitem'
import Screen from '../components/Screen'
import ScreenHeading from '../components/ScreenHeading.js'
import Separator from '../components/Separator'

export default function MessagesScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { name: 'Abir Hossain ', message: 'Hey, how are you? aksjds adkasd sad asda sfdf dsfs dfsdfs dfsd', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { name: 'Mosh Hamedani', message: 'Hey, how are you?', image: 'https://www.w3schools.com/howto/img_avatar.png' },
  ])

  return (
    <Screen>
      <View style={styles.messageContainer}>

        <ScreenHeading>Messages</ScreenHeading>

        <FlatList
          refreshing={refreshing}
          onRefresh={() => setMessages([{ name: 'Mosh Hamedani', message: 'Hey, how are you?', image: 'https://www.w3schools.com/howto/img_avatar.png' }])}
          data={messages}
          keyExtractor={(message) => message.name}
          renderItem={({ item }) => (
            <HorizontalListitem
              onPress={() => console.log("Pressed")}
              title={item.name}
              subtitle={item.message}
              image={item.image}
              showChevrons
            // renderRightActions={() => (
            //   <View style={{ width: 70, height: 30, backgroundColor: 'red' }}>
            //   </View>
            // )}
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </Screen >
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    flex: 1,
  },
})

