import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

const UserList = ({users}) => {
  return (
    <ScrollView>
      {users.map(user => {
        return (
          <TouchableOpacity onPress={() => console.log('hi')} key={user.id}>
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
