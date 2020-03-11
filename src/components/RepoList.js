import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';

const RepoList = ({repos, username}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Text style={styles.header}>Repos</Text>
      <View>
        {repos.length ? (
          <View>
            {repos.map(repo => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('RepoShow', {
                    repoName: repo.name,
                    username: username,
                  })
                }
                key={repo.id}>
                <ListItem
                  key={repo.id}
                  title={repo.name}
                  subtitle={repo.description}
                  bottomDivider
                />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.noRepos}>No Repos To Show</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  noRepos: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 500,
    paddingLeft: 90,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RepoList;
