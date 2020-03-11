import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

const UserList = ({users}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {users.map(user => {
        return (
          <TouchableOpacity
            onPress={() => navigation.push('UserShow', {username: user.login})}
            key={user.id}>
            <ListItem
              roundAvatar
              title={user.login}
              leftAvatar={{source: {uri: user.avatar_url}}}
              bottomDivider
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
