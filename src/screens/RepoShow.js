import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import UserList from '../components/UserList';

class RepoShow extends Component {
  state = {
    repo: {},
    collaborators: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const {username, repoName} = this.props.route.params;
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${repoName}`),
      fetch(
        `https://api.github.com/repos/${username}/${repoName}/contributors`,
      ),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([repo, collaborators]) =>
        this.setState({
          repo,
          collaborators,
        }),
      );
  };
  render() {
    const {collaborators, repo} = this.state;
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.name}>{repo.name}</Text>
          <Text style={styles.language}>{repo.Language}</Text>
        </View>
        <View>
          {collaborators.length ? (
            <View>
              <UserList users={collaborators} />
            </View>
          ) : (
            <View>
              <Text>No Contributors</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  language: {
    fontSize: 20,
    backgroundColor: '#fff',
  },
});

export default RepoShow;
