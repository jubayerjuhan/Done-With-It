import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { Modal, StyleSheet, Text, Button, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import Colors from '../../config/Colors.js';
import AppText from '../AppText/AppText.js';
import Screen from '../Screen';
import AppPickerItem from '../AppPickerItem.js';

function AppPicker({ icon, placeholder }) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const pickerItemsLabel = [
    { label: 'Furniture', value: 1 },
    { label: 'Camera', value: 2 },
    { label: 'Apparel', value: 3 },
    { label: 'Appliences', value: 4 },
  ]

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container} >
          <MaterialIcons style={styles.icon} name={icon} size={20} color={Colors.medium} />
          <AppText style={{ color: Colors.medium, flex: 1 }}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <Entypo style={styles.icon} name='chevron-down' size={20} color={Colors.medium} />
        </View>
      </TouchableWithoutFeedback>



      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Click' onPress={() => setModalVisible(false)} />
          <FlatList
            data={pickerItemsLabel}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) =>
            (
              <AppPickerItem title={item.label} onPress={() => {
                setSelectedItem(item)
                setModalVisible(false)
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
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  }
})

export default AppPicker;