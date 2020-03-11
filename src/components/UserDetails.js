import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const UserDetails = ({user}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: user.avatar_url,
      }}
    />
    <View style={styles.content}>
      <Text style={styles.name}> {user.name}</Text>
      <Text style={styles.username}>{user.login}</Text>
      <Text>{user.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%',
    paddingBottom: '35%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '15%',
  },
  name: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 20,
  },
});

export default UserDetails;
