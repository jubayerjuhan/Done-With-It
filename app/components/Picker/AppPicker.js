import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { Modal, StyleSheet, Text, Button, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import Colors from '../../config/Colors.js';
import AppText from '../AppText/AppText.js';
import Screen from '../Screen';
import AppPickerItem from './AppPickerItem.js';

function AppPicker({
  icon,
  onSelectItem,
  PickerItemComponent = AppPickerItem,
  placeholder,
  width = '100%'
}) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const pickerItemsLabel = [
    { label: 'Furnitures', value: 1, icon: 'floor-lamp', bg: '#fc5c65' },
    { label: 'Cars', value: 2, icon: 'car', bg: '#fd9644' },
    { label: 'Cameras', value: 3, icon: 'camera', bg: '#fed330' },
    { label: 'Games', value: 4, icon: 'cards', bg: '#26de81' },
    { label: 'Cloathing', value: 5, icon: 'shoe-heel', bg: "#2bcbba" },
    { label: 'Sports', value: 6, icon: 'basketball', bg: "#45aaf2" },
    { label: 'Movies and Music', value: 7, icon: 'headphones', bg: "#4b7bec" },
  ]

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]} >
          <MaterialIcons style={styles.icon} name={icon} size={20} color={Colors.medium} />
          {selectedItem ? <AppText style={styles.selected}>{selectedItem.label}</AppText> : <AppText style={styles.text}>{placeholder}</AppText>}
          <Entypo style={styles.icon} name='chevron-down' size={20} color={Colors.medium} />
        </View>
      </TouchableWithoutFeedback>



      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <FlatList
            data={pickerItemsLabel}
            numColumns={3}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) =>
            (
              <PickerItemComponent item={item} onPress={() => {
                setSelectedItem(item)
                setModalVisible(false)
                onSelectItem(item)
              }} />
            )
            }
          />
        </Screen>
      </Modal>
    </>

  );

}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingVertical: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
    padding: 10,
  },
  selected: {
    color: Colors.black, flex: 1
  },
  text: {
    color: Colors.medium, flex: 1
  },
  icon: {
    marginRight: 10,
  }
})

export default AppPicker;