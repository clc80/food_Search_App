import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
    <Feather
      name="search"
      style={styles.iconStyle}
    />
      <TextInput
        placeholder = "Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
