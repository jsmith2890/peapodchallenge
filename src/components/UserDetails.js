import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const UserDetails = ({user}) => (
  <View>
    <Image
      source={{
        uri: user.avatar_url,
      }}
    />
    <View>
      <Text> {user.name}</Text>
      <Text>{user.login}</Text>
      <Text>{user.location}</Text>
    </View>
  </View>
);

export default UserDetails;
