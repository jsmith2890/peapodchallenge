import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

const RepoList = ({repos}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Text>Repos</Text>
      {repos.map(repo => (
        <TouchableOpacity
          onPress={() => navigation.navigate('RepoShow', {repo: repo.name})}
          key={repo.id}>
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
};

export default RepoList;
