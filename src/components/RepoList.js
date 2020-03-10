import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

const RepoList = ({repos}) => (
  <ScrollView>
    <Text>Repos</Text>
    {repos.map(repo => (
      <TouchableOpacity onPress={() => console.log('hi')} key={repo.id}>
        <ListItem
          key={repo.id}
          title={repo.name}
          subtitle={repo.description}
          bottomDivider
        />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default RepoList;
