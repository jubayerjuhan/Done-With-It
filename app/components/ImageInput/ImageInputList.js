import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput.js';

const ImageInputList = ({ imageUris = [], onAddImage, onDeleteImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}
      >
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View style={styles.image} key={uri}>
              <ImageInput imageUri={uri} onChangeImage={() => onDeleteImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    marginRight: 10,
  }
});

export default ImageInputList;