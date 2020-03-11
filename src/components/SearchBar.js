import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

function SearchBar() {
  const [value, onChangeText] = React.useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Users Here..."
        style={styles.searchInput}
        autoCapitalize="none"
        autoCompleteType="off"
        autoFocus={true}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserShow', {username: value})}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    width: 300,
    borderColor: 'grey',
    borderWidth: 2,
    marginLeft: 5,
  },
  button: {
    padding: 10,
    width: 75,
    backgroundColor: 'grey',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
  },
});

export default SearchBar;
